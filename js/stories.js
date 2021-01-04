function storyFilter(control)
{
    daniyar = document.getElementById("daniyar-stories");
    dina = document.getElementById("dina-stories");
    family = document.getElementById("family-stories");
    friends = document.getElementById("friends-stories");

    if (control.value=='all'){
        daniyar.style.display = 'block';
        dina.style.display = 'block';
        family.style.display = 'block';
        friends.style.display = 'block';
    } else{
        daniyar.style.display = 'none';
        dina.style.display = 'none';
        family.style.display = 'none';
        friends.style.display = 'none';

        if (control.value == 'daniyar'){
            daniyar.style.display = 'block';
        }
        if (control.value == 'dina'){
            dina.style.display = 'block';
        }
        if (control.value == 'family'){
            family.style.display = 'block';
        }
        if (control.value == 'friends'){
            friends.style.display = 'block';
        }
    }
}