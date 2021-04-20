import React from 'react';

const details = ({start, end}) => {

    const content = [
        {
            logo: "business",
            heading: "Business Processes Automation",
            description: "Enhance your processes with less efforts"
        },
        {
            logo: "web",
            heading: "Web & Mobile applications for B2B and B2C",
            description: "Custom software that you need,nothing else"
        },
        {
            logo: "integration",
            heading: "Integrations",
            description: "We prebuilt automation tool is not enough"
        },
        {
            logo: "products",
            heading: "Product research and design",
            description: "Solve real business problems with design"
        },
        {
            logo: "legacy",
            heading: "Legacy Software modernization",
            description: "Lets your systems meet the needs of the business now"
        },
        {
            logo: "scaling",
            heading: "Scaling product Delivery",
            description: "Full cross-functional teams to scale feature delivery"
        }
    ]
    
    var subContent = content.splice(start, end);
    return <React.Fragment>
                {
                    subContent.map((solution, id) => {
                        return <div key={id} className="details">
                                    <img className="logo" src={require(`../logos/${solution.logo}.svg`)}/>
                                    <div className="col2">
                                        <div className="heading row">
                                            {solution.heading}
                                        </div>
                                        <p className="solution-points">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                    })
                }
            </React.Fragment>
}

export default React.memo(details);