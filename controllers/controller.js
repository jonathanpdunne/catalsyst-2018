const fetchLanding = (req, res) => {
    res.render("index");
};

const fetchHome = (req, res) => {
    res.render("news");
};

const fetchProfile = (req, res) => {
    res.render("profile");
};

const fetchTeams = (req, res) => {
    res.render("teams");
};

const fetchInfo = (req, res) => {
    res.render("info");
};

const fetchAbout = (req, res) => {
    res.render("about");
};

const fetchContact = (req, res) => {
    res.render("contact");
};

// const fetchTeam = (req, res) => {
//     res.render("teamprofile");
// };

const fetchSignIn = (req, res) => {
    res.render("signin");
};
const fetchSignUp = (req, res, next) => {
    res.render("signup");

};
const fetchBookApp = (req, res) => {
    res.render("appointment");
};

const fetchChat = (req,res) =>{
    res.render("chat")
};

const fetch404 = (req, res) => {
    res.render("404");
};


// All company pages, brilliantly hard coded
const fetchDeloittePage = (req, res) => {
    res.render("deloitte");
};

const fetchSapPage = (req, res) => {
    res.render("sap");
};

const fetchAtlassianPage = (req, res) => {
    res.render("atlassian");
}

const fetchCompany = (req, res) => {
    res.render("events");
};


module.exports = {
    fetchLanding, fetchHome, fetchProfile, fetchTeams, fetchBookApp, fetchSignIn, fetchSignUp, fetchInfo, fetchContact, fetchAbout, fetch404, fetchChat, fetchDeloittePage, fetchSapPage, fetchAtlassianPage, fetchCompany
}
