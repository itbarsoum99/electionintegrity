var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function validateForm() {
  var x = document.forms["stateform"]["state"].value;
  if (x == "US") {
    alert("Please select a state to continue.")
  }
  if (x == "AL") {
    alert("Please visit https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote in order to register to vote in Alabama.");
  }
  if (x == "AK") {
    alert("Please visit https://voterregistration.alaska.gov/ in order to register to vote in Alaska.")
  }
  if (x == "AZ") {
    alert("Please visit https://servicearizona.com/VoterRegistration/selectLanguage?ref=voteusa in order to register to vote in Arizona.")
  }
  if (x == "AR") {
    alert("Please visit https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information in order to register to vote in Arkansas.")
  }
  if (x == "CA") {
    alert("Please visit https://registertovote.ca.gov/ in order to register to vote in California.")
  }
  if (x == "CO") {
    alert("Please visit https://www.sos.state.co.us/voter/pages/pub/home.xhtml?ref=voteusa in order to register to vote in Colorado.")
  }
  if (x == "CT") {
    alert("Please visit https://voterregistration.ct.gov/OLVR/welcome.do in order to register to vote in Connecticut.")
  }
  if (x == "DE") {
    alert("Please visit https://ivote.de.gov/VoterView/registrant/newregistrant in order to register to vote in Delaware.")
  }
  if (x == "DC") {
    alert("Please visit https://www.dcboe.org/Voters/Register-To-Vote/Register-to-Vote in order to register to vote in Washington, DC.")
  }
  if (x == "FL") {
    alert("Please visit https://registertovoteflorida.gov/home in order to register to vote in Florida.")
  }
  if (x == "GA") {
    alert("Please visit https://georgia.gov/register-to-vote in order to register to vote in Georgia.")
  }
  if (x == "HI") {
    alert("Please visit https://olvr.hawaii.gov/ in order to register to vote in Hawaii.")
  }
  if (x == "ID") {
    alert("Please visit https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ApplicationInstructions.aspx?ref=voteusa in order to register to vote in Idaho.")
  }
  if (x == "IL") {
    alert("Please visit https://ova.elections.il.gov/ in order to register to vote in Illinois.")
  }
  if (x == "IN") {
    alert("Please visit https://www.in.gov/idr/register.htm in order to register to vote in Indiana.")
  }
  if (x == "IA") {
    alert("Please visit https://sos.iowa.gov/elections/voterinformation/voterregistration.html in order to register to vote in Iowa.")
  }
  if (x == "KS") {
    alert("Please visit https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx in order to register to vote in Kansas.")
  }
  if (x == "KY") {
    alert("Please visit https://elect.ky.gov/registertovote/Pages/default.aspx in order to register to vote in Kentucky.")
  }
  if (x == "LA") {
    alert("Please visit https://www.sos.la.gov/ElectionsAndVoting/RegisterToVote/Pages/default.aspx in order to register to vote in Louisiana.")
  }
  if (x == "ME") {
    alert("Please visit https://www.maine.gov/sos/cec/elec/voter-info/votreg.html in order to register to vote in Maine.")
  }
  if (x == "MD") {
    alert("Please visit https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1 in order to register to vote in Maryland.")
  }
  if (x == "MA") {
    alert("Please visit https://www.sec.state.ma.us/ovr/?ref=voteusa in order to register to vote in Massachusetts.")
  }
  if (x == "MI") {
    alert("Please visit https://mvic.sos.state.mi.us/RegisterVoter in order to register to vote in Michigan.")
  }
  if (x == "MN") {
    alert("Please visit https://www.sos.state.mn.us/elections-voting/register-to-vote in order to register to vote in Minnesota.")
  }
  if (x == "MS") {
    alert("Please visit https://www.sos.ms.gov/Vote/Pages/default.aspx?ref=voteusa in order to register to vote in Mississippi.")
  }
  if (x == "MO") {
    alert("Please visit https://www.sos.mo.gov/elections/goVoteMissouri/register in order to register to vote in Missouri.")
  }
  if (x == "MT") {
    alert("Please visit https://sosmt.gov/elections/vote/ in order to register to vote in Montana.")
  }
  if (x == "NE") {
    alert("Please visit https://sos.nebraska.gov/elections/registering-vote in order to register to vote in Nebraska.")
  }
  if (x == "NV") {
    alert("Please visit https://www.registertovotenv.gov/ in order to register to vote in Nevada.")
  }
  if (x == "NH") {
    alert("Please visit https://sos.nh.gov/elections/voters/register-to-vote/ in order to register to vote in New Hampshire.")
  }
  if (x == "NJ") {
    alert("Please visit https://www.state.nj.us/state/elections/voter-registration.shtml in order to register to vote in New Jersey.")
  }
  if (x == "NM") {
    alert("Please visit https://portal.sos.state.nm.us/OVR/WebPages/InstructionsStep1.aspx in order to register to vote in New Mexico.")
  }
  if (x == "NY") {
    alert("Please visit https://www.elections.ny.gov/VotingRegister.html in order to register to vote in New York.")
  }
  if (x == "NC") {
    alert("Please visit https://www.ncsbe.gov/registering/how-register in order to register to vote in North Carolina.")
  }
  if (x == "ND") {
    alert("There is no voter registration necessary to vote in North Dakota.")
  }
  if (x == "OH") {
    alert("Please visit https://olvr.ohiosos.gov/ in order to register to vote in Ohio.")
  }
  if (x == "OK") {
    alert("Please visit https://www.ok.gov/elections/Voter_Info/Register_to_Vote/index.html in order to register to vote in Oklahoma.")
  }
  if (x == "OR") {
    alert("Please visit https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en in order to register to vote in Oregon.")
  }
  if (x == "PA") {
    alert("Please visit https://www.votespa.com/Register-to-Vote/Pages/default.aspx in order to register to vote in Pennsylvania.")
  }
  if (x == "RI") {
    alert("Please visit https://vote.sos.ri.gov/Voter/RegisterToVote in order to register to vote in Rhode Island.")
  }
  if (x == "SC") {
    alert("Please visit https://info.scvotes.sc.gov/eng/ovr/start.aspx in order to register to vote in South Carolina.")
  }
  if (x == "SD") {
    alert("Please visit https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx in order to register to vote in South Dakota.")
  }
  if (x == "TN") {
    alert("Please visit https://sos.tn.gov/products/elections/register-vote in order to register to vote in Tennessee.")
  }
  if (x == "TX") {
    alert("Please visit https://www.votetexas.gov/mobile/register/index.htm in order to register to vote in Texas.")
  }
  if (x == "UT") {
    alert("Please visit https://secure.utah.gov/voterreg/index.html in order to register to vote in Utah.")
  }
  if (x == "VT") {
    alert("Please visit https://sos.vermont.gov/elections/voters/registration.aspx in order to register to vote in Vermont.")
  }
  if (x == "VA") {
    alert("Please visit https://www.elections.virginia.gov/registration/how-to-register/ in order to register to vote in Virginia.")
  }
  if (x == "WA") {
    alert("Please visit https://www.sos.wa.gov/elections/register.aspx in order to register to vote in Washington.")
  }
  if (x == "WV") {
    alert("Please visit https://ovr.sos.wv.gov/register/Landing in order to register to vote in West Virginia.")
  }
  if (x == "WI") {
    alert("Please visit https://myvote.wi.gov/en-us/RegisterToVote in order to register to vote in Wisconsin.")
  }
  if (x == "WY") {
    alert("Please visit https://sos.wyo.gov/Elections/State/RegisteringToVote.aspx in order to register to vote in Wyoming.")
  } 
}
/*
$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("div")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
})
*/
