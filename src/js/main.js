var data = {
    "latvia": ["Continued UK commitment to European security", "Acquired rights", "Free movement and indivisibility of four freedoms", "Preservation of EU unity", "UK budget contributions for single market access"],
    "belgium": ["Free movement and indivisibility of four freedoms", "Preservation of EU unity", "Ensuring Brexit is a worse deal than membership", "Good future economic relations"],
    "malta": ["Free movement and indivisibility of four freedoms", "Preservation of EU unity"],
    "italy": ["Free movement and indivisibility of four freedoms", "Acquired rights", "Good future economic relations"],
    "spain": ["Acquired rights", "Free movement and indivisibility of four freedoms", "Good future relations", "Gibraltar"],
    "austria": ["Preservation of EU unity and integrity of the single market", "Free movement and indivisibility of the four freedoms", "Good future relations"],
    "france": ["Brexit must be a worse deal than membership", "Free movement and indivisibility of the four freedoms", "Preservation of EU unity and integrity of the single market", "Bilateral defence and border treaties"],
    "sweden": ["Indivisibility of four freedoms", "Single market integrity", "Preservation of EU unity", "EU budget"],
    "poland": ["Acquired rights", "Free movement and indivisibility of the four freedoms", "Good future relations", "EU budget"],
    "romania": ["Acquired rights", "Free movement and indivisibility of four freedoms", "EU budget"],
    "greece": ["Preservation of EU unity", "Integrity of single market"],
    "ireland": ["Free movement and indivisibility of four freedoms", "No hard border"]
};

export function init(el, context, config, mediator) {
    var group = el.getAttribute("data-alt");

    var countryData = data[group];

    var svg = `<svg xmlns="http://www.w3.org/2000/svg" height="266.2" viewBox="0 0 300 266.225" enable-background="new 0 0 300 266.225"><g id="poland" fill="#d2d2d2"><path d="m168.9 101.3h29.8v29.8h-29.8z"/><path d="m168.9 135.1h29.8v29.8h-29.8z"/><path d="m168.9 168.9h29.8v29.8h-29.8z"/><path d="m202.6 135.1h29.8v29.8h-29.8z"/></g><g id="uk"><path fill="#fff" d="m68.5 68.5h27.8v27.8h-27.8z"/><path d="m95.4 69.5v25.8h-25.8v-25.8h25.8m2-2h-29.8v29.8h29.8v-29.8z" fill="#6d6e70"/></g><g fill="#d2d2d2"><path id="ireland" d="m0 67.5h29.8v29.8h-29.8z"/><path id="france" d="m67.5 135.1h29.8v29.8h-29.8z"/><g id="belgium"><path d="m101.3 135.1h29.8v29.8h-29.8z"/><path d="m101.3 101.3h29.8v29.8h-29.8z"/><path d="m135.1 101.3h29.8v29.8h-29.8z"/></g><g id="spain"><path d="m33.78 168.9h29.8v29.8h-29.8z"/><path d="m67.5 168.9h29.8v29.8h-29.8z"/></g><path id="italy" d="m101.3 168.9h29.8v29.8h-29.8z"/><g id="latvia"><path d="m202.6 101.3h29.8v29.8h-29.8z"/><path d="m202.6 67.5h29.8v29.8h-29.8z"/><path d="m202.6 33.78h29.8v29.8h-29.8z"/></g><g id="sweden"><path d="m135.1 67.5h29.8v29.8h-29.8z"/><path d="m168.9 0h29.8v29.8h-29.8z"/><path d="m202.6 0h29.8v29.8h-29.8z"/></g><path id="greece" d="m202.6 236.4h29.8v29.8h-29.8z"/><g id="austria"><path d="m135.1 135.1h29.8v29.8h-29.8z"/><path d="m135.1 168.9h29.8v29.8h-29.8z"/></g><g id="malta"><path d="m270.2 236.4h29.8v29.8h-29.8z"/><path d="m101.3 236.4h29.8v29.8h-29.8z"/></g><g id="romania"><path d="m202.6 168.9h29.8v29.8h-29.8z"/><path d="m202.6 202.6h29.8v29.8h-29.8z"/><path d="m168.9 202.6h29.8v29.8h-29.8z"/><path d="m135.1 202.6h29.8v29.8h-29.8z"/></g></g></svg>`;

    var priorities = countryData.reduce((a, b, i) => {
        return a + `<div class="priority" data-count="${i + 1}">${b}</div>`;
    }, "");

    var html = `<div class="interactive-minis">
                    <div class="svg-map g-${group}">${svg}</div>
                    <div class="priorities">
                        <h3>Priorities</h3>
                        <div class="priorities-list">${priorities}</div>
                    </div>
                </div>`;



    el.innerHTML = html.replace(/%assetPath%/g, config.assetPath);
}
