import pandas as pd

ratings=pd.read_csv("ratings.csv")

def transformer_recommend(user_id,top_n=5):
    user_history=ratings[ratings["user_id"]==user_id].sort_values(by="rating",ascending=False)
    if user_history.empty:
        return[]
    viewed_products=(user_history["product"].tolist())
    recommendations=[]
    for product in viewed_products:
        similar_products=ratings[ratings["product"]!=product]["product"].tolist()
        for item in similar_products:
            if item not in recommendations:
                recommendations.append(item)

            if len (recommendations)>=top_n:
                return recommendations

    return recommendations            
