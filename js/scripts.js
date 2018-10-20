/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/



(function($) {
    var languages = [
                    "javascript", 
                    "css3", 
                    "html5", 
                    "nodejs",
                    "react",
                    "jquery",
                    "postgresql",
                    "express",
                    "python", 
                    "c", 
                    "cplusplus", 
                    "csharp",
                    "go"
                    ];
    var lookup = {
        "javascript": "Javascript", 
        "css3": "CSS3", 
        "html5": "HTML5", 
        "nodejs":"Node",
        "react": "React",
        "jquery": "jQuery",
        "postgresql": "PostgreSQL",
        "express": "Express",
        "python": "Python", 
        "c": "C", 
        "cplusplus": "C++", 
        "csharp": "C#", 
        "go": "Go"
    }

    // Generate Skills Chart
    var skillslist = ``;
    for(let i = 0; i < languages.length; i++){
        skillslist = skillslist.concat(`
        <li>
            <h3>${lookup[languages[i]]}</h2>
            <img src="./devicon-master/icons/${languages[i]}/${languages[i]}-original.svg" alt="${languages[i]}"> 
        </li>
        `)
    }
    console.log(skillslist);
    $('#skills ul').append(skillslist);
    
    // Generate Project List
    var projectdom = `                
        <div class="project shadow-large">
            <div class="project-image">
                <img src="images/project.jpg" />
            </div>
            <div class="project-info">
                <h3>Project Name Here</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
                <a href="#">View Project</a>
            </div>
        </div>
        `
    

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);
