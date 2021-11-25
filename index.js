import axios from 'axios';

function footballStats(){
    return new Promise((done, err) => {
		err('Use One of Our Methods, Please Check API for reference on Methods')
	})
}

footballStats.liveMatches = () => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: 'http://api.football-data.org/v2/matches?status=LIVE',
            type: 'GET',
        
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.Matches = () => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: 'https://api.football-data.org/v2/matches',
            type: 'GET',
        
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.ChampionsLeague = () => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: 'https://api.football-data.org/v2/competitions/CL/matches',
            type: 'GET',
        
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.PremierLeagueByMatchDay = (id) => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: `https://api.football-data.org/v2/competitions/PL/matches?matchday=${id}`,
            type: 'GET',
        
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.Competitions = () => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: 'https://api.football-data.org//v2/competitions/',
            type: 'GET',
        
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.FIFAWorldCup = () => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: 'https://api.football-data.org//v2/competitions/2000/',
            type: 'GET',
        
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.RealMadrid = () => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: 'https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED',
            type: 'GET',
        
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.Teams = () => {
    return new Promise((done, err) => {
        var options = {
            headers: { 'X-Auth-Token': 'f72227136c53472a8f9469675d6140a0' },
            url: 'https://api.football-data.org/v2/teams/',
            type: 'GET',
        
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })
}

footballStats.PremierLeagueByMatchDay(11);
export default footballStats;