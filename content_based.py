import pandas as pd

products = pd.read_csv("product.csv")

def content_recommend(product_name,top_n=5):
    selected_product=products[products["product"].astype(str).str.lower()==str(product_name).lower()]
    if selected_product.empty:
        return[]
    selected_category=(selected_product.iloc[0]["category"])
    recommendations=products[products["category"]==selected_category]
    recommendations=recommendations[recommendations["product"].astype(str).str.lower()!=str(product_name).lower()]
    return recommendations["product"].head(top_n).tolist()
