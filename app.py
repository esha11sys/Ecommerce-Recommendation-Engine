from flask import Flask, render_template, jsonify, request
from hybrid import hybrid_recommend

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/recommend/<int:user_id>")
def recommend(user_id):
    recommendations=hybrid_recommend(user_id)
    return jsonify({"user_id":user_id,"recommendations":recommendations})
@app.route("/ab-test")
def ab_test():

    user_id=request.args.get(
        "user_id",
        default=1,type=int
    )

    if user_id%2==0:
        variant="A"
        strategy=("standard Hybrid Recommendation")
        conversion_rate=12.8
        click_through_rate=21.4
    else:
        variant="B"
        strategy =("AI Enhanced Hybrid Recommendation")
        conversion_rate=15.6
        click_through_rate=26.9
    return jsonify({
        "user_id":user_id,
        "variant":variant,
        "strategy":strategy,
        "conversion_rate":conversion_rate,
        "click_through_rate": click_through_rate})

@app.route("/analytics")
def analytics():
    return jsonify ({
        "recommendation_accuracy":87.4,
        "click_through_rate":26.9,
        "conversion_rate":15.6,
        "revenue_increase":18.2,
        "model":"Hybrid Recommendation Engine"})

if __name__ == "__main__":
    app.run(debug=True)
