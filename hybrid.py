from recommendation import (collaborative_recommend)
from content_based import (content_recommend)
from neural_collaborative import(neural_collaborative_recommend)
from transformer_recommendation import (transformer_recommend)
import pandas as pd
product=pd.read_csv("product.csv")
ratings=pd.read_csv("ratings.csv")


def hybrid_recommend(user_id,top_n=10):
    final_recommendations=[]
    #collaborative filtering

    collaborative = (collaborative_recommend(user_id,top_n=5))
    final_recommendations.extend(collaborative)


    #neural COllaborative filtering
    neural_recommendations=(neural_collaborative_recommend(user_id,top_n=5))
    final_recommendations.extend(neural_recommendations)
    #Transformer recommendation
    transformer_recommendations=(transformer_recommend(user_id,top_n=5))
    final_recommendations.extend(transformer_recommendations)
    #content based filtering
    user_products=ratings[ratings["user_id"]==user_id]["product"].tolist()
    for product in user_products:
        content_recommendations=(content_recommend(product,top_n=5))
        final_recommendations.extend(content_recommendations)

    #remove duplicates
    unique_recommendations=[]
    for item in final_recommendations:
        if item not in unique_recommendations:
            unique_recommendations.append(item)
    # Remove products already owned/rated by the user
    user_products = ratings[
        ratings["user_id"] == user_id
    ]["product"].tolist()

    filtered_recommendations = [

        item

        for item in unique_recommendations

        if item not in user_products

    ]

    return filtered_recommendations[:top_n]
   
