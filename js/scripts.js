$(document).ready(function() {

  $("#question0").submit(function(event) {
      event.preventDefault();
      var ready = $("input:radio[name=yesNoOne]:checked").val();

      if (ready === "yes") {
        $("#question0Content").hide();
        $(".infoLink").hide();
        $("#question1Content").show();
      }
      else {
        $(".infoLink").show();
      };
    });

    $("#questionOne").submit(function(event) {
      event.preventDefault();
      var qstOne = $("input:radio[name=yesNoOne1]:checked").val();
      if (qstOne === "yes") {
        $("#question1content").hide();
        $("#question0Content").hide();
        $(".cssInfo").show();
      }
      else {
        $("#question1Content").hide();
        $(".cssInfo").hide();
        $("#question2Content").show();
      };
    });

    $("#questionTwo").submit(function(event) {
      event.preventDefault();
      var qstTwo = $("input:radio[name=yesNoOne2]:checked").val();
      if (qstTwo === "yes") {
        $("#question2content").hide();
        $("#question1Content").hide();
        $(".rubyInfo").show();
      }
      else {
        $("#question2Content").hide();
        $(".rubyInfo").hide();
        $("#question3Content").show();
      };
    });

    $("#questionThree").submit(function(event) {
      event.preventDefault();
      var qst3 = $("input:radio[name=yesNoOne3]:checked").val();
      if (qst3 === "yes") {
        $("#question3content").hide();
        $("#question2Content").hide();
        $(".cshInfo").show();
      }
      else {
        $("#question3Content").hide();
        $(".cshInfo").hide();
        $("#question4Content").show();
      };
    });

    $("#questionFour").submit(function(event) {
      event.preventDefault();
      var qst4 = $("input:radio[name=yesNoOne4]:checked").val();
      if (qst4 === "yes") {
        $("#question4content").hide();
        $("#question3Content").hide();
        $(".phpInfo").hide();
        $(".javaInfo").show();
      }
      else {
        $(".javaInfo").hide();
        $(".phpInfo").show();
      };
    });


  });
