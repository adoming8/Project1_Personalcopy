
  // Sidenav
  var sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav, {});

  // Slider
  const slider = document.querySelector('.slider');
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 4000
  });

  // Material Boxed
  const mb = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(mb, {});

  // ScrollSpy
  const ss = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(ss, {});


  $("#add_ingredients").on("click", function(event) {  
    event.preventDefault();
    var ingredients = $("#search-item").val();
      console.log(ingredients)
    $("#list").text(ingredients);
    
  });


// API request for recipe by ingredients 

$("#find_recipe").on("click", function(event) {  
  event.preventDefault();
  var ingredients = $("#list").text();
    console.log(ingredients)
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients="+ ingredients,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "58a123ce77msh9e0a297c2162053p1c58d9jsn37d013719c3d"
      }
    }
  $.ajax(settings).then(function (response) {
      // console.log(response);
      console.log(response);
      $("#top10_recipe0").text(response[0].title);
      $("#top10_recipe1").text(response[1].title);
      $("#top10_recipe2").text(response[2].title);
      $("#top10_recipe3").text(response[3].title);
      $("#top10_recipe4").text(response[4].title);
      $("#top10_recipe5").text(response[5].title);
      $("#top10_recipe6").text(response[6].title);
      $("#top10_recipe7").text(response[7].title);
      $("#top10_recipe8").text(response[8].title);
      $("#top10_recipe9").text(response[9].title);

      $("#pic1").html(` <img src="${response[0].image}">`);

    });
});




