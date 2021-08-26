function modifyStyle(element, active, slider)
{
    if(slider.checked == true)
    {
        if(active)
        {
            // element.style.color = "white";
            element.style.backgroundColor = "#DDDDDD";
        }
        else
        {
            // element.style.color = "black";
            element.style.backgroundColor = "transparent";
        }
    }
    else
    {
        if(active)
        {
            // element.style.color = "black";
            element.style.backgroundColor = "#404040";
        }
        else
        {
            // element.style.color = "white";
            element.style.backgroundColor = "transparent";
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById('slider');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) 
            {
                var element = document.querySelector(`nav a[href="#${id}"]`);
                element.classList.add('scrollActive');
                modifyStyle(element, true, slider);
            } else 
            {
                var element = document.querySelector(`nav a[href="#${id}"]`);
                element.classList.remove('scrollActive');
                modifyStyle(element, false, slider);
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
  
});