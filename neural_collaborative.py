import pandas as pd
import numpy as np
from sklearn.preprocessing import(LabelEncoder)
from sklearn.metrics.pairwise import(cosine_similarity)
ratings=pd.read_csv("ratings.csv")

def neural_collaborative_recommend( user_id,top_n=5):
    if user_id not in ratings["user_id"].unique():
        return[]
    user_encoder=LabelEncoder()
    item_encoder=LabelEncoder()

    ratings["user_encoded"]=(
        user_encoder.fit_transform(
            ratings["user_id"]
        )
    )

    ratings["item_encoded"]=(
        item_encoder.fit_transform(
            ratings["product"]
        )
    )

    user_item_matrix= ratings.pivot_table(
    index="user_id",
    columns="product",
    values="rating",
    fill_value=0)

    user_vector=user_item_matrix.loc[user_id].values.reshape(1,-1)
    similarity=cosine_similarity(user_vector,user_item_matrix.values)[0]
    similar_users=np.argsort(similarity)[::-1]
    current_products=set(
    ratings[ratings["user_id"]==user_id]["product"])

    recommendations=[]
    for index in similar_users:
      similar_user_id=(user_item_matrix.index[index])
      if similar_user_id== user_id:
        continue
    products=ratings[ratings["user_id"]==similar_user_id].sort_values(by="rating",ascending=False)["product"].tolist()

    for product in products:
        if product not in current_products:
            if product not in recommendations:
                recommendations.append(product)

        if len( recommendations) >=top_n:

         
                return recommendations
        return recommendations               
