Items = [{
    type: 'Axe',
    cost: 50,
    level: 1,
    odds: 1,
    onAttack: function(m) {
        m.hp -= 5;
    }
}];
Affixes = [
    [{
        type: "Tiger's",
        cost: 100,
        level: 5,
        odds: 0.3,
        onAttack: function(m) {
            m.hp -= 15;
        }
    }],
    [{
        type: 'of fire',
        cost: 75,
        level: 1,
        odds: 0.7,
        onAttack: function(m) {
            m.hp -= 3;
        }
    }]
];
Sights = [ { type: 'Gambler', odds: 0.05, action: function(g){ } }, { type: 'Tree', odds: 0, action: function(g){ } }, { type: 'Rock', odds: 0, action: function(g){ } } ];
TerrainTiles = [{
    sights: [ { type: 'Inn', odds: 1, action: function(g){ } },  { type: 'Bar', odds: 1, action: function(g){ } }, Sights[0] ],
    style: "yellow",
    type: "$"
}, {
    sights: [ { type: 'Tree', odds: 0.6, action: Sights[1].action },  Sights[0] ],
    style: "lime",
    type: "F"
}, {
    sights: [ { type: 'Tree', odds: 0.6, action: Sights[1].action },  Sights[0] ],
    style: "lime",
    type: "V"
}, {
    sights: [ { type: 'Rock', odds: 1, action: Sights[2].action } ],
    style: "#A50",
    type: "M"
}];
