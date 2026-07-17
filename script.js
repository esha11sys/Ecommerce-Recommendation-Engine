async function getRecommendations() {


    const userId = document.getElementById(
        "userId"
    ).value;


    const result = document.getElementById(
        "recommendationResult"
    );


    if (!userId) {

        result.innerHTML =
            "Please enter a valid user ID.";

        return;

    }


    result.innerHTML =
        "Generating recommendations...";


    try {


        const response = await fetch(
            `/recommend/${userId}`
        );


        const data = await response.json();


        if (
            !data.recommendations ||
            data.recommendations.length === 0
        ) {

            result.innerHTML =
                "No recommendations found for this user.";

            return;

        }


        result.innerHTML = `

            <strong>
                Recommendations for User ${data.user_id}
            </strong>

            <br><br>

            ${data.recommendations
                .map(
                    product =>
                        `<span class="tag">
                            ${product}
                        </span>`
                )
                .join(" ")}

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to connect to the recommendation server.";

        console.error(error);

    }

}


async function runABTest() {


    const result = document.getElementById(
        "abResult"
    );


    result.innerHTML =
        "Running A/B test...";


    try {


        const response = await fetch(
            "/ab-test?user_id=1"
        );


        const data = await response.json();


        result.innerHTML = `

            <strong>
                Variant ${data.variant}
            </strong>

            <br><br>

            Strategy:
            ${data.strategy}

            <br><br>

            Conversion Rate:
            ${data.conversion_rate}%

            <br>

            Click Through Rate:
            ${data.click_through_rate}%

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to load A/B test data.";

        console.error(error);

    }

}


async function loadAnalytics() {


    const result = document.getElementById(
        "analyticsResult"
    );


    result.innerHTML =
        "Loading analytics...";


    try {


        const response = await fetch(
            "/analytics"
        );


        const data = await response.json();


        result.innerHTML = `

            <div class="analytics-box">

                <span>
                    Recommendation Accuracy
                </span>


                <strong>
                    ${data.recommendation_accuracy}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Click Through Rate
                </span>


                <strong>
                    ${data.click_through_rate}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Conversion Rate
                </span>


                <strong>
                    ${data.conversion_rate}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Revenue Increase
                </span>


                <strong>
                    ${data.revenue_increase}%
                </strong>

            </div>

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to load analytics.";

        console.error(error);

    }

}async function getRecommendations() {


    const userId = document.getElementById(
        "userId"
    ).value;


    const result = document.getElementById(
        "recommendationResult"
    );


    if (!userId) {

        result.innerHTML =
            "Please enter a valid user ID.";

        return;

    }


    result.innerHTML =
        "Generating recommendations...";


    try {


        const response = await fetch(
            `/recommend/${userId}`
        );


        const data = await response.json();


        if (
            !data.recommendations ||
            data.recommendations.length === 0
        ) {

            result.innerHTML =
                "No recommendations found for this user.";

            return;

        }


        result.innerHTML = `

            <strong>
                Recommendations for User ${data.user_id}
            </strong>

            <br><br>

            ${data.recommendations
                .map(
                    product =>
                        `<span class="tag">
                            ${product}
                        </span>`
                )
                .join(" ")}

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to connect to the recommendation server.";

        console.error(error);

    }

}


async function runABTest() {


    const result = document.getElementById(
        "abResult"
    );


    result.innerHTML =
        "Running A/B test...";


    try {


        const response = await fetch(
            "/ab-test?user_id=1"
        );


        const data = await response.json();


        result.innerHTML = `

            <strong>
                Variant ${data.variant}
            </strong>

            <br><br>

            Strategy:
            ${data.strategy}

            <br><br>

            Conversion Rate:
            ${data.conversion_rate}%

            <br>

            Click Through Rate:
            ${data.click_through_rate}%

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to load A/B test data.";

        console.error(error);

    }

}


async function loadAnalytics() {


    const result = document.getElementById(
        "analyticsResult"
    );


    result.innerHTML =
        "Loading analytics...";


    try {


        const response = await fetch(
            "/analytics"
        );


        const data = await response.json();


        result.innerHTML = `

            <div class="analytics-box">

                <span>
                    Recommendation Accuracy
                </span>


                <strong>
                    ${data.recommendation_accuracy}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Click Through Rate
                </span>


                <strong>
                    ${data.click_through_rate}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Conversion Rate
                </span>


                <strong>
                    ${data.conversion_rate}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Revenue Increase
                </span>


                <strong>
                    ${data.revenue_increase}%
                </strong>

            </div>

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to load analytics.";

        console.error(error);

    }

}async function getRecommendations() {


    const userId = document.getElementById(
        "userId"
    ).value;


    const result = document.getElementById(
        "recommendationResult"
    );


    if (!userId) {

        result.innerHTML =
            "Please enter a valid user ID.";

        return;

    }


    result.innerHTML =
        "Generating recommendations...";


    try {


        const response = await fetch(
            `/recommend/${userId}`
        );


        const data = await response.json();


        if (
            !data.recommendations ||
            data.recommendations.length === 0
        ) {

            result.innerHTML =
                "No recommendations found for this user.";

            return;

        }


        result.innerHTML = `

            <strong>
                Recommendations for User ${data.user_id}
            </strong>

            <br><br>

            ${data.recommendations
                .map(
                    product =>
                        `<span class="tag">
                            ${product}
                        </span>`
                )
                .join(" ")}

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to connect to the recommendation server.";

        console.error(error);

    }

}


async function runABTest() {


    const result = document.getElementById(
        "abResult"
    );


    result.innerHTML =
        "Running A/B test...";


    try {


        const response = await fetch(
            "/ab-test?user_id=1"
        );


        const data = await response.json();


        result.innerHTML = `

            <strong>
                Variant ${data.variant}
            </strong>

            <br><br>

            Strategy:
            ${data.strategy}

            <br><br>

            Conversion Rate:
            ${data.conversion_rate}%

            <br>

            Click Through Rate:
            ${data.click_through_rate}%

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to load A/B test data.";

        console.error(error);

    }

}


async function loadAnalytics() {


    const result = document.getElementById(
        "analyticsResult"
    );


    result.innerHTML =
        "Loading analytics...";


    try {


        const response = await fetch(
            "/analytics"
        );


        const data = await response.json();


        result.innerHTML = `

            <div class="analytics-box">

                <span>
                    Recommendation Accuracy
                </span>


                <strong>
                    ${data.recommendation_accuracy}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Click Through Rate
                </span>


                <strong>
                    ${data.click_through_rate}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Conversion Rate
                </span>


                <strong>
                    ${data.conversion_rate}%
                </strong>

            </div>


            <div class="analytics-box">

                <span>
                    Revenue Increase
                </span>


                <strong>
                    ${data.revenue_increase}%
                </strong>

            </div>

        `;


    } catch (error) {


        result.innerHTML =
            "Unable to load analytics.";

        console.error(error);

    }

}