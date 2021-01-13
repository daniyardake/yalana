function storyFilter(control)
{
    kids = document.getElementById("kids-stories");
    family = document.getElementById("family-stories");
    friends = document.getElementById("friends-stories");

    if (control.value=='all'){
        kids.style.display = 'block';
        family.style.display = 'block';
        friends.style.display = 'block';
    } else{
        kids.style.display = 'none';
        family.style.display = 'none';
        friends.style.display = 'none';

        if (control.value == 'kids'){
            kids.style.display = 'block';
        }
        if (control.value == 'family'){
            family.style.display = 'block';
        }
        if (control.value == 'friends'){
            friends.style.display = 'block';
        }
    }
}