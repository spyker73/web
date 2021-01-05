    var slideIndex = 1; 
        displaySlide(slideIndex); 
       
        function moveSlides(n) { 
            displaySlide(slideIndex += n); 
        } 
       
        function activeSlide(n) { 
            displaySlide(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide"); 
            var totaldots =  
                document.getElementsByClassName("footerdot"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 


    var slideIndex = 1; 
        displaySlide1(slideIndex); 
       
        function moveSlides1(n) { 
            displaySlide1(slideIndex += n); 
        } 
       
        function activeSlide1(n) { 
            displaySlide1(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide1(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide1"); 
            var totaldots =  
                document.getElementsByClassName("footerdot1"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 
        
    var slideIndex = 1; 
        displaySlide2(slideIndex); 
       
        function moveSlides2(n) { 
            displaySlide2(slideIndex += n); 
        } 
       
        function activeSlide2(n) { 
            displaySlide2(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide2(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide2"); 
            var totaldots =  
                document.getElementsByClassName("footerdot2"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 

        var slideIndex = 1; 
        displaySlide3(slideIndex); 
       
        function moveSlides3(n) { 
            displaySlide3(slideIndex += n); 
        } 
       
        function activeSlide3(n) { 
            displaySlide3(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide3(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide3"); 
            var totaldots =  
                document.getElementsByClassName("footerdot3"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 

        var slideIndex = 1; 
        displaySlide4(slideIndex); 
       
        function moveSlides4(n) { 
            displaySlide4(slideIndex += n); 
        } 
       
        function activeSlide4(n) { 
            displaySlide4(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide4(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide4"); 
            var totaldots =  
                document.getElementsByClassName("footerdot4"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 
        var slideIndex = 1; 
        displaySlide5(slideIndex); 
       
        function moveSlides5(n) { 
            displaySlide5(slideIndex += n); 
        } 
       
        function activeSlide5(n) { 
            displaySlide5(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide5(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide5"); 
            var totaldots =  
                document.getElementsByClassName("footerdot5"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 

    var slideIndex = 1; 
        displaySlide6(slideIndex); 
       
        function moveSlides6(n) { 
            displaySlide6(slideIndex += n); 
        } 
       
        function activeSlide6(n) { 
            displaySlide6(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide6(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide6"); 
            var totaldots =  
                document.getElementsByClassName("footerdot6"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 
        var slideIndex = 1; 
        displaySlide7(slideIndex); 
       
        function moveSlides7(n) { 
            displaySlide7(slideIndex += n); 
        } 
       
        function activeSlide7(n) { 
            displaySlide7(slideIndex = n); 
        } 
       
        /* Main function */
        function displaySlide7(n) { 
            var i; 
            var totalslides =  
                document.getElementsByClassName("slide7"); 
            var totaldots =  
                document.getElementsByClassName("footerdot7"); 
              
            if (n > totalslides.length) { 
                slideIndex = 1; 
            } 
              
            if (n < 1) { 
                slideIndex = totalslides.length; 
            } 
            for (i = 0; i < totalslides.length; i++) { 
                totalslides[i].style.display = "none"; 
            } 
            for (i = 0; i < totaldots.length; i++) { 
                totaldots[i].className =  
                totaldots[i].className.replace(" active", ""); 
            } 
            totalslides[slideIndex - 1].style.display = "block"; 
            totaldots[slideIndex - 1].className += " active"; 
        } 

