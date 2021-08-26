function DarkModeLightMode()
{
  if (document.getElementById("slider").checked == true)
  {
    // trigger light mode
    document.body.style.backgroundColor = "#EEEEEE";
    document.getElementById("company-splash").style.backgroundColor = "#EEEEEE";
    document.getElementById("dbc-version-pane").style.backgroundColor = "#BBBBBB";
    document.getElementById("navigation-pane").style.backgroundColor = "#BBBBBB";
    document.getElementById("dbc-info-pane").style.backgroundColor = "#EEEEEE";

    document.getElementById("dark-mode-word").style.color = "black";
    document.getElementById("light-mode-word").style.color = "black";
    document.getElementById("dbc-version").style.color = "black";

    document.getElementById("signals-table").style.backgroundColor = "#DDDDDD";
    document.getElementById("notes-container").style.backgroundColor = "#DDDDDD";

    var elements = document.getElementsByClassName("message-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#BBBBBB";
    }
    var elements = document.getElementsByClassName("message-table");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#DDDDDD";
    }
    var elements = document.getElementsByClassName("supported-vehicles-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#DDDDDD";
    }
    var elements = document.getElementsByClassName("supported-vehicles");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#DDDDDD";
    }
    var elements = document.getElementsByClassName("supported-vehicles-list");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#DDDDDD";
    }
    var elements = document.getElementsByClassName("signals-table-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#DDDDDD";
    }
    var elements = document.getElementsByClassName("signals-table");
    for (var i = 0; i < elements.length; i++)
    {
      var cells = elements[i].getElementsByTagName("td");
      for (var j = 0; j < cells.length; ++j)
      {
        cells[j].style.borderColor = "black";
      }
    }
    var elements = document.getElementsByClassName("notes-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#DDDDDD";
    }
    var elements = document.getElementsByClassName("primary-text");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.color = "black";
    }
    var elements = document.getElementsByClassName("secondary-text");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.color = "black";
    }
    var elements = document.getElementsByClassName("scrollActive");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#BBBBBB";
    }
  }
  else
  {
    // trigger dark mode
    document.body.style.backgroundColor = "#121212";
    document.getElementById("company-splash").style.backgroundColor = "#404040"; //#404040
    document.getElementById("dbc-version-pane").style.backgroundColor = "#282828";
    document.getElementById("navigation-pane").style.backgroundColor = "#282828";
    document.getElementById("dbc-info-pane").style.backgroundColor = "#121212";

    document.getElementById("dark-mode-word").style.color = "#DFDFDF";
    document.getElementById("light-mode-word").style.color = "#DFDFDF";
    document.getElementById("dbc-version").style.color = "#DFDFDF";

    document.getElementById("signals-table").style.backgroundColor = "#282828";
    document.getElementById("notes-container").style.backgroundColor = "#282828";

    var elements = document.getElementsByClassName("message-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#404040";
    }
    var elements = document.getElementsByClassName("message-table");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#282828";
    }
    var elements = document.getElementsByClassName("supported-vehicles-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#282828";
    }
    var elements = document.getElementsByClassName("supported-vehicles");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#282828";
    }
    var elements = document.getElementsByClassName("supported-vehicles-list");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#282828";
    }
    var elements = document.getElementsByClassName("signals-table-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#282828";
    }
    var elements = document.getElementsByClassName("signals-table");
    for (var i = 0; i < elements.length; i++)
    {
      var cells = elements[i].getElementsByTagName("td");
      for (var j = 0; j < cells.length; ++j)
      {
        cells[j].style.borderColor = "#DFDFDF";
      }
    }
    var elements = document.getElementsByClassName("notes-container");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#282828";
    }
    var elements = document.getElementsByClassName("primary-text");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.color = "white";
    }
    var elements = document.getElementsByClassName("secondary-text");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.color = "#DFDFDF";
    }
    var elements = document.getElementsByClassName("scrollActive");
    for (var i = 0; i < elements.length; ++i)
    {
      elements[i].style.backgroundColor = "#282828";
    }
  }
}