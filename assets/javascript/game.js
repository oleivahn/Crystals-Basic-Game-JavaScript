   var targetNumber;

   function getNumber() {
      targetNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);

      $("#number-to-guess").text(targetNumber);
   }
   getNumber();

   var counter = 0;
   var lossCounter = 0;
   var winsCounter = 0;
   // function startGame() {
   // Create an object with different arrays inside
   var questions = {
      a1: [1, 8, 32, 64],
      a2: [16, 1, 8, 32],
      a3: [10, 5, 3, 7],
      a4: [15, 7, 8, 3],
      a5: [5, 10, 13, 4],
   }

   // separates the object's properties (a1-a5) into its own array. Meaning, it creates an array with a1, a2, a3, a4 and a5 in it.
   // function newCrystalValues (){
   var innerArray = Object.getOwnPropertyNames(questions);
   //   var showArray = questions[qIndex[Math.floor(Math.random() * (4 - 0 + 1)) + 0]];

   //   var numberOptions;
   // function newCrystalValues (){
   var numberOptions = questions[innerArray[Math.floor(Math.random() * (4 - 0 + 1)) + 0]];
   // };

   // newCrystalValues ();
   // Next we create a for loop to create crystals for every numberOption.
   for (var i = 0; i < numberOptions.length; i++) {

      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");

      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

      // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", "./assets/images/crystal.jpg");

      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);

      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
   }

   // This time, our click event applies to every single crystal on the page. Not just one.
   $(".crystal-image").on("click", function() {

      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.
      counter += crystalValue;

      // All of the same game win-lose logic applies. So the rest remains unchanged.
      $("#pointsCounter").text("New score: " + counter);

      if (counter === targetNumber) {
         alert("You win!");
         counter = 0;
         winsCounter++;
         $("#wins").html("You've won " + winsCounter + " times!");
         getNumber();
         $("#pointsCounter").text("New score: 0");
         numberOptions = questions[innerArray[Math.floor(Math.random() * (4 - 0 + 1)) + 0]];
         // newCrystalValues ();
      } else if (counter >= targetNumber) {
         alert("You lose!!");
         counter = 0;
         lossCounter++;
         $("#loss").html("You've lost " + lossCounter + " times!");
         getNumber();
         $("#pointsCounter").text("New score: 0");
         numberOptions = questions[innerArray[Math.floor(Math.random() * (4 - 0 + 1)) + 0]];
         // newCrystalValues ();
      }

   });
