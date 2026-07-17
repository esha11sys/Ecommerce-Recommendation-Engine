import pandas as pd

from sklearn.metrics.pairwise import (
    cosine_similarity
)


ratings = pd.read_csv(
    "ratings.csv"
)


def collaborative_recommend(
    user_id,
    top_n=5
):

    if user_id not in ratings[
        "user_id"
    ].unique():

        return []


    matrix = ratings.pivot_table(

        index="user_id",

        columns="product",

        values="rating",

        fill_value=0

    )


    similarity = cosine_similarity(
        matrix
    )


    users = list(
        matrix.index
    )


    user_index = users.index(
        user_id
    )


    scores = similarity[
        user_index
    ].copy()


    scores[
        user_index
    ] = -1


    similar_user_index = scores.argmax()


    similar_user_id = matrix.index[
        similar_user_index
    ]


    current_products = set(

        ratings[
            ratings["user_id"]
            == user_id
        ]["product"]

    )


    similar_user_products = ratings[

        ratings["user_id"]
        == similar_user_id

    ].sort_values(

        by="rating",

        ascending=False

    )["product"].tolist()


    recommendations = [

        product

        for product
        in similar_user_products

        if product
        not in current_products

    ]


    return recommendations[
        :top_n
    ]