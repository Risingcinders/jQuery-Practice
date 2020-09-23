var index = 0;

var previndex = 0;

var att = '';

var insert = "'text'";

var jQuerytasks = [
    {
        title: "Welcome",
        para: "Click the arrow in the top right to go to the first example!",
        init: "$(':button').hide()",
        action: "",
        undo: "$(':button').show();",
    },
    {
        title: "Click",
        para:
            "Click the button to see if clicking clicks.  It's impossible get to this task without .click(), so I'm glad we made it this far.",
        init: "",
        action: "$('#title').css('background-color', 'red');",
        undo: "$('#title').css('background-color', 'transparent');",
    },
    {
        title: "Hide",
        para:
            "Get off the road! If you click the button, this paragraph will hide forever.  A similar, less dramatic effect can be achieved with .css('display','none')",
        init: "",
        action: "$('#para').hide(1000);",
        undo: "$('#para').css('display','block');",
    },
    {
        title: "Show",
        para:
            "Where'd the title go? Click the button and I'll SHOW you something!",
        init: "$('#title').hide(1000);",
        action: "$('#title').show(1000);",
        undo: "$('#title').show(1000);",
    },
    {
        title: "Toggle",
        para:
            "Click the button to Toggle our title.  Don't worry, if you go to the next page it will come back.",
        init: "$('#title').toggle(1000);",
        action: "$('#title').toggle(1000);",
        undo: "$('#title').show(1000);",
    },
    {
        title: "slideDown",
        para:
            "Click the button to SlideDown our title.  It's basically like showing but down.",
        init: "$('#title').hide(1000);",
        action: "$('#title').slideDown( 'slow', function() {});",
        undo: "$('#title').show(1000);",
    },
    {
        title: "slideUp",
        para:
            "You'll never guess what this does.",
        init: "",
        action: "$('#title').slideUp( 'slow', function() {});",
        undo: "$('#title').show(1000);",
    },
    {
        title: "slideToggle",
        para:
            "If you thought that was great...",
        init: "",
        action: "$('#title').slideToggle( 'slow', function() {});",
        undo: "$('#title').show(1000);",
    },
    {
        title: "fadeIn",
        para:
            "jQuery has a flair for the dramatic",
        init: "$('#title').css('display','none');",
        action: "$('#title').fadeIn( 5000, function() {});",
        undo: "",
    },
    {
        title: "fadeOut",
        para:
            "Sometimes it's best to let go.",
        init: "",
        action: "$('#title').fadeOut( 5000, function() {});",
        undo: "$('#title').css('display','block');",
    },
    {
        title: "addClass",
        para:
            "Let's jazz this page up a bit",
        init: "",
        action: "$('p, h1').addClass('neon');",
        undo: "$('p, h1').removeClass('neon');",
    },
    {
        title: "before",
        para:
            "This sticks something before something else. Clicking this button multiple times can cause us problems.",
        init: "",
        action: "$('#para').before( '<a><b>Hello there!</b></a>' );",
        undo: "$('a').remove();",
    },
    {
        title: "after",
        para:
            "This sticks something after something else. It can be used to rearrange things too!",
        init: "",
        action: "$('#para').after( '<a><b>General Kenobi</b></a>' );",
        undo: "$('a').remove();",
    },
    {
        title: "append",
        para:
            "This sticks something after something else. It can be used to rearrange things too!",
        init: "$('#para').before( '<a><b>Hello there!</b></a>' ); $('#para').before( '<a><b>Hello there!</b></a>' ); $('#para').before( '<a><b>Hello there!</b></a>' );",
        action: "$('a').append( '<a><b>General Kenobi</b></a>' );",
        undo: "$('a').remove();",
    },
    {
        title: "html",
        para:
            "This replaces the content of a HTML element with new content.",
        init: "$('#para').before( '<a><b>Hello there!</b></a>' );",
        action: "$('a').html( 'Oh boy.  We still doing this?' );",
        undo: "$('a').remove();",
    },
    {
        title: "attr",
        para:
            "This will pull the value of an attribute from a selected element, in this case the #prev arrow. ",
        init: "$('#para').before( '<a>The attribute is: </a>' );",
        action: "att = $('#prev').attr( 'alt' );  $('a').text(att);",
        undo: "$('a').remove();",
    },
    {
        title: "val",
        para:
            "This will pull the value of an attribute from a selected element, in this case the #prev arrow. ",
        init: "$('#para').after( '<select>\<option>Pancakes</option>\<option>Waffles</option>\</select><a>You have chosen:</a>' );  ",
        action: "val = $('select').val();  $('a').text(val);",
        undo: "$('a').remove(); $('select').remove();",
    },
    {
        title: "text",
        para:
            "Not surprisingly, we've been using this already. This will allow us to place text in an HTML tag.  Put your name above. ",
        init: "$('#para').before( '<a>Your name here:</a><form><label><input type=' + insert + '></label></form>' );  ",
        action: "val = $('input').val();  $('a').text(val);",
        undo: "$('a').remove(); $('form').remove();",
    },
];



$("#next").click(function () {
    previndex = index;
    index++;
    if (index == 18) {
        index = 0;
    }
    updatepage();
});

$("#prev").click(function () {
    previndex = index;
    index--;
    if (index == -1){
        index = 17;
    }
    updatepage();
});

function updatepage() {
    console.log("page updated");
    $("#title").text(jQuerytasks[index].title);
    $("#para").text(jQuerytasks[index].para);
    console.log("previndex =" + previndex);
    console.log("index =" + index);
    eval(jQuerytasks[previndex].undo);
    eval(jQuerytasks[index].init);
    $("h2").text(index + 1 + " / 17 pages")
}

$(":button").click(function () {
    eval(jQuerytasks[index].action);
});

updatepage();
