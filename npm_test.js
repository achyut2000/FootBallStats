import footballStats from "./index.js";

footballStats.liveMatches().then(obj => {
    console.log("Series:", obj)
}).catch(err => {
    console.log(err)
})

footballStats.Matches().then(obj => {
    console.log("Fixtures:", obj)
}).catch(err => {
    console.log(err)
})

footballStats.ChampionsLeague().then(obj => {
    console.log("Fixutres by Date", obj)
}).catch(err => {
    console.log(err)
})

footballStats.PremierLeagueByMatchDay(11).then(obj => {
    console.log("News", obj)
}).catch(err => {
    console.log(err)
})

footballStats.Competitions().then(obj => {
    console.log("Live", obj)
}).catch(err => {
    console.log(err)
})

footballStats.FIFAWorldCup().then(obj => {
    console.log("Results by Date", obj)
}).catch(err => {
    console.log(err)
})

footballStats.RealMadrid().then(obj => {
    console.log("Results by Date", obj)
}).catch(err => {
    console.log(err)
})

footballStats.Teams().then(obj => {
    console.log("Results by Date", obj)
}).catch(err => {
    console.log(err)
})