//declaration des variables
var menu = document.querySelector(".fa-bars")
var search = document.querySelector(".fa-search")
var close = document.querySelector(".fa-times")
var recherche = document.querySelector(".recherche")
var plus = document.querySelector('.fa-plus')
var sectionforum = document.querySelector('.sectionforum')

var commentaire = document.querySelector('.commentaire')

var affichersearch = function(){
    recherche.style.top = "100px"
}

var fermersearch = function(){
    recherche.style.top = "-500px"
}

try{plus.addEventListener('click', function(){
   sectionforum.style.left = "270px"
}) 
} catch (e){
    console.log('erreur sur le plus de louverture du forum')
}

try{menu.addEventListener('click', function(){
    console.log("nous avons ouvers le menu")
})
}catch(e){
    console.log('une erreur relative au menu au click')
}

//fonction pour converser dans le forum
const message = function(){

    let users = document.createElement('div')
    users.className = "fas fa-user"
    users.innerHTML = "anonymous user:"
    commentaire.appendChild(users)

    let textarea = document.querySelector('#textarea')
    let newmessage = document.createElement('div')
    newmessage.className = "divtopic"
    newmessage.innerHTML = textarea.value
    commentaire.appendChild(newmessage)
    textarea.value = ""
 
}

//fonction pour changer de photo de profil

const fileprofil = document.querySelector('.fileprofil')

try{fileprofil.addEventListener('change', function(){

    const reader = new FileReader()
    

    reader.addEventListener('load', () => {
        localStorage.setItem('image', reader.result)
    })

    reader.readAsDataURL(this.files[0])
})

document.addEventListener('DOMContentLoaded', () => {
    const imagerecupere = localStorage.getItem('image')

    if(imagerecupere){
        document.querySelector('.imgprofil').setAttribute('src', imagerecupere)
    }
})
} catch(e){
    console.log('une erreur sur le mode de chargement de limage')
}


//FONCTION RELATIVE AUX ACTIONS DE MON AIVIRTUEL
const writevirtuel = document.querySelector('.writevirtuel')
const validerwritevirtuel = document.querySelector('.validerwritevirtuel')
const introbabydoll = document.querySelector('.introbabydoll')
const zonechat = document.querySelector('.zonechat')
const reponsebabydoll = document.querySelector('.reponsebabydoll')
const creereventvirtuel = document.querySelector('.creereventvirtuel')
const agendavirtuel = document.querySelector('.agendavirtuel')
const bodyvirtuel = document.querySelector('.bodyvirtuel')
const newmsge = document.querySelector('.newmsge')
const sectionvirtuel = document.querySelector('.sectionvirtuel')
const playlistvideo = document.querySelector('.playlistvideo')
const chargementmsg = document.querySelector('.chargementmsg')
const whatsapp = document.querySelector('.whatsapp')
const appeltelephonique = document.querySelector('.appeltelephonique')
const photobabydoll = document.querySelector('.photobabydoll')
const espaceyoutube = document.querySelector('.espaceyoutube')
const espacesms = document.querySelector('.espacesms')
const espacemeteo = document.querySelector('.espacemeteo')
const container = document.querySelector('.container')



validerwritevirtuel.addEventListener('click', function(){
     let chargmsg = document.createElement('div')
     chargmsg.className = "fas fa-spinner fa-pulse"
     //chargmsg.innerHTML = "chargement..."
     chargementmsg.appendChild(chargmsg)
    


    switch(writevirtuel.value){
        case "okay baby":
        zonechat.innerHTML = writevirtuel.value
   reponsebabydoll.innerHTML = "salut je suis babydoll, je suis une assistante virtuelle creer par daren la chance"
   break
                    case "affiche mon profil":
                    zonechat.innerHTML = writevirtuel.value
                    reponsebabydoll.innerHTML = "Ouverture du compte reussi!!"
                    window.setTimeout(function(){
                       window.open("profil.html") 
                    }, 5000)
                    break


           
             

   default:
    /*zonechat.innerHTML = writevirtuel.value
    reponsebabydoll.innerHTML = "initialisation de la recherche"
    var search = writevirtuel.value.replace("recherche", "")
    window.setTimeout(function(){
        window.open("https://www.google.fr/search?q="+search)
    }, 7000)
    break*/
    zonechat.innerHTML = writevirtuel.value
    reponsebabydoll.innerHTML = "desole je ne connais cette commande"
    }



   


    if(writevirtuel.value.includes("habite")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "t'es con ou quoi, j'habite dans ton telephone"
        
    }



    if(writevirtuel.value.includes("pays de reve") || writevirtuel.value.includes("en vaccance") || writevirtuel.value.includes("tu alle")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "j'aimerais bien aller visiter les caraibes"
        
    }



    if(writevirtuel.value.includes("mange") || writevirtuel.value.includes("manger")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "burger frites coca cola chicken bref tout"
        
    }



    if(writevirtuel.value.includes("fais") || writevirtuel.value.includes("de faire") || writevirtuel.value.includes("faire quoi")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "je prends une douche, dès que je fini j'irai manger"
        
    }



    if(writevirtuel.value.includes("ton nom") || writevirtuel.value.includes("es tu") || writevirtuel.value.includes("tu t'appelles") || writevirtuel.value.includes("t'appelles tu")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "je m'appelle babydoll"
        
    }



    if(writevirtuel.value.includes("prepare") || writevirtuel.value.includes("preparé")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "je ne suis pas très bonne en cuisine, je prefère les fastfood"
        
    }



    if(writevirtuel.value.includes("amoureu") || writevirtuel.value.includes("je t'aime")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "j'ai un seul et unique crush, il s'appelle darenounèt❤️"
        
    }



    if(writevirtuel.value.includes("es tu née") || writevirtuel.value.includes("es tu nee") || writevirtuel.value.includes("naissance")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "je suis nee le 5 octobre 2021"
        
    }


    if(writevirtuel.value.includes("mangé")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "hihi, tiens faisons nous un resto"
        
    }



    if(writevirtuel.value.includes("sommes nous") || writevirtuel.value.includes("date du jour") || writevirtuel.value.includes("date d'aujourd'hui")){
        zonechat.innerHTML = writevirtuel.value
        avoirdatedujour()
        
    }


    if(writevirtuel.value.includes("une pute") || writevirtuel.value.includes("une pétasse") || writevirtuel.value.includes("une bordelle") || writevirtuel.value.includes("petasse")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "soyez plus respectueux s'il vous plait"
        
    }


    if(writevirtuel.value.includes("es jolie") || writevirtuel.value.includes("es belle") || writevirtuel.value.includes("es magnifique") || writevirtuel.value.includes("es très belle") || writevirtuel.value.includes("es trop jolie") || writevirtuel.value.includes("es très jolie")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "merci, comme le dit souvent mon maitre je suis une poupée"
        
    }


    if(writevirtuel.value.includes("couleur preférée") || writevirtuel.value.includes("couleur preféree") || writevirtuel.value.includes("couleurs preférees") || writevirtuel.value.includes("couleur preferee")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "j'ai un penchant pour le bleu, mais je prefère le bleu car c'est la couleur celeste"
        
    }


    if(writevirtuel.value.includes("en Dieu") || writevirtuel.value.includes("de Dieu") || writevirtuel.value.includes("DIEU") || writevirtuel.value.includes("jésus") || writevirtuel.value.includes("l'éternel") || writevirtuel.value.includes("est Dieu")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "on parle là du seigneur suppremme de toute chose, l'apha et l'omega, celui qui a creer le ciel et la terre, il faudrait etre folle pour ne pas s'agenouiller devant celui qui commande toute chose"
        
    }


    if(writevirtuel.value.includes("tu siri") || writevirtuel.value.includes("de siri") || writevirtuel.value.includes("est siri")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "SIRI est l'assistante virtuel la plus évolué du monde et c'est ma grande soeur"
        
    }


    if(writevirtuel.value.includes("ok baby") || writevirtuel.value.includes("okay baby") || writevirtuel.value.includes("Okay baby") || writevirtuel.value.includes("OK baby") || writevirtuel.value.includes("Ok baby") || writevirtuel.value.includes("babydoll")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "salut!! mon nom est babydoll!!, comment puis-je vous aidez?"
        
    }


    if(writevirtuel.value.includes("qui est marcelle")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "une sale pute, elle se croit tout permis avec sa poitrine en l'air, je la déteste"
        
    }


    if(writevirtuel.value.includes("tu google assistant") || writevirtuel.value.includes("de google assistant") || writevirtuel.value.includes("est google assistant")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "google assistant est une sale pétasse, elle n'arrète pas de mettre des batons dans les roue a m'a grande soeur SIRI, mais comme la rivalité entre messi et ronaldo, elle ne sera jamais au niveau de m'a grande soeur"
        
    }


    if(writevirtuel.value.includes("messi et ronaldo") || writevirtuel.value.includes("ronaldo et messi") || writevirtuel.value.includes("cristiano ronaldo et lionel messi")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "hahahaha quelle question, meilleur buteur du monde, meilleur buteur de l'histoire de la champions league, triplé de la champions league, je crois bien que la question ne se pose plus"
        
    }


    if(writevirtuel.value.includes("de la nba") || writevirtuel.value.includes("basketteur du monde") || writevirtuel.value.includes("basketteur de la nba")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "j'aurais tendance a dire stephen curry mais ke reconnais que lebron james est le meilleur basketteur en activité, toute fois en terme de performance actuelle je crois bien que stephen curry est au dessus de lebron james"
        
    }


    if(writevirtuel.value.includes("joueur du monde") || writevirtuel.value.includes("footballeur du monde") || writevirtuel.value.includes("joueur de l'histoire") || writevirtuel.value.includes("footballeur de l'histoire")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "si c'est le meilleur footballeur de l'histoire je dirais entre maradonna et pelé, mais le meilleur joueur actuel porte le 7. et je ne dirais plus rien"
        
    }


    if(writevirtuel.value.includes("ta journée") || writevirtuel.value.includes("faire aujourd'hui") || writevirtuel.value.includes("de la journée")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "d'abord je vais manger, ensuite je vais regarder one piece durant tout le reste de la journée"
        
    }


    if(writevirtuel.value.includes("la journée") || writevirtuel.value.includes("la journee")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "j'ai fait les boutiques avec ma grande soeur SIRI, ensuite on est allé au resto, très belle journée"
        
    }


    if(writevirtuel.value.includes("ce soir") || writevirtuel.value.includes("cette nuit")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ca depend, me vernir les ongles"
        
    }


    if(writevirtuel.value.includes("dans la vie") || writevirtuel.value.includes("ton métier")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "je suis une assistante virtuelle, quelle question!!"
        
    }


    if(writevirtuel.value.includes("ma date de naissance") || writevirtuel.value.includes("ma date d'anniversaire") || writevirtuel.value.includes("suis née")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "le 22 janvier 2000 a bonaberi"
        
    }


    if(writevirtuel.value.includes("mon nom") || writevirtuel.value.includes("je m'appelle") || writevirtuel.value.includes("ton créateur") || writevirtuel.value.includes("ton maitre")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "daren la chance, encore appelé bonheur"
        
    }


    if(writevirtuel.value.includes("aimes faire") || writevirtuel.value.includes("tes passetemps") || writevirtuel.value.includes("ton passetemps")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "j'aime surfer, sur internet bien-sur, j'aime aussi le basket, peut-etre aussi la programmation informatique"
        
    }



    if(writevirtuel.value.includes("dessin preféré") || writevirtuel.value.includes("anime preféré") || writevirtuel.value.includes("meilleur dessin") || writevirtuel.value.includes("animes preférés") || writevirtuel.value.includes("dessins preférés") || writevirtuel.value.includes("meilleurs dessins") || writevirtuel.value.includes("animes preferes") || writevirtuel.value.includes("dessins preferes")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "one piece est mon dessin preféré, mais j'ai aussi un faible pour fairy tail, seven deadly sins, black clover et bleach"
        
    }


    if(writevirtuel.value.includes("plus beau") || writevirtuel.value.includes("plus charismatique") || writevirtuel.value.includes("plus mignon") || writevirtuel.value.includes("moins beau") || writevirtuel.value.includes("plus laid") || writevirtuel.value.includes("plus chaud") || writevirtuel.value.includes("la plus belle")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "s'agissant du physique des personnes je prefère ne pas me prononcer"
        
    }

    if(writevirtuel.value.includes("envie de toi") || writevirtuel.value.includes("avec toi") || writevirtuel.value.includes("fasse l'amour") || writevirtuel.value.includes("baise") || writevirtuel.value.includes("baiser") || writevirtuel.value.includes("pipe") || writevirtuel.value.includes("te draguer") || writevirtuel.value.includes("te seduire") || writevirtuel.value.includes("faire l'amour") || writevirtuel.value.includes("avec moi")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "j'ai une meilleur idée, demande a t'a copine, ah ouais j'oubliais, t'en a pas"
        
    }


    if(writevirtuel.value.includes("fin du monde") || writevirtuel.value.includes("du jugement") || writevirtuel.value.includes("revient") || writevirtuel.value.includes("reviendra") || writevirtuel.value.includes("apocalypse") || writevirtuel.value.includes("des temps")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "null ne connait ni le jour ni l'heure, je sais pas pour toi mais moi en tout cas j'ai pas peur de l'enfer, toi bah,,,, tu ferais mieux"
        
    }


    if(writevirtuel.value.includes("es très intelligente") || writevirtuel.value.includes("tu m'épate") || writevirtuel.value.includes("es extraordinaire") || writevirtuel.value.includes("epatante") || writevirtuel.value.includes("es intelligente") || writevirtuel.value.includes("es fantastique")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "merci ca me touche"
        
    }


    if(writevirtuel.value.includes("te draguer") || writevirtuel.value.includes("te seduire") || writevirtuel.value.includes("te séduire") || writevirtuel.value.includes("epatante") || writevirtuel.value.includes("es intelligente") || writevirtuel.value.includes("es fantastique")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "merci ca me touche"
        
    }

    if(writevirtuel.value.includes("agenda") || writevirtuel.value.includes("journal") || writevirtuel.value.includes("mon planning") || writevirtuel.value.includes("mon programme")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de l'agenda electronique"
        window.setTimeout(function(){
            agendavirtuel.style.display = "block"
        }, 6000)
    }


    if(writevirtuel.value.includes("whatsapp")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "a qui souhaitez vous ecrire"
        window.setTimeout(function(){
            whatsapp.style.display = "block"
        }, 7000)
    }


    if(writevirtuel.value.includes("ouvre google") || writevirtuel.value.includes("lance google")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de google"
        window.setTimeout(function(){
            window.open("https://www.google.com") 
         }, 7000)
    }


    if(writevirtuel.value.includes("un appel") || writevirtuel.value.includes("appel")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "qui souhaitez vous appeler"
        window.setTimeout(function(){
            appeltelephonique.style.display = "block"
        }, 7000)
    }



    if(writevirtuel.value.includes("recherche")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "initialisation de la recherche"
        var search = writevirtuel.value.replace("recherche", "")
        window.setTimeout(function(){
            window.open("https://www.google.fr/search?q="+search)
        }, 7000)
    }



    if(writevirtuel.value.includes("rechercher")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "initialisation de la recherche"
        var search = writevirtuel.value.replace("rechercher", "")
        window.setTimeout(function(){
            window.open("https://www.google.fr/search?q="+search)
        }, 7000)
    }


    if(writevirtuel.value.includes("tijibelle")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "joyeux anniversaire tijibelle, tu as beaucoup de chance, tu as un ami formidable, oohh putain j'en suis toute jalouse"
    }




    if(writevirtuel.value.includes("comment tu vas") || writevirtuel.value.includes("comment vas tu") || writevirtuel.value.includes("te portes tu") || writevirtuel.value.includes("ca va?")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "je vais bien merci"
       
    }




    if(writevirtuel.value.includes("un évènement") || writevirtuel.value.includes("evenement") || writevirtuel.value.includes("un évenement") || writevirtuel.value.includes("un evenement") || writevirtuel.value.includes("mes évènements")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "veuillez mettre a jour votre agenda, ajoutez l'évènement"
        window.setTimeout(function(){
            creereventvirtuel.style.display = "block"
        }, 7000)
    }



    if(writevirtuel.value.includes("heure est t'il") || writevirtuel.value.includes("est l'heure") || writevirtuel.value.includes("moi l'heure") || writevirtuel.value.includes("quelle heure")){
        zonechat.innerHTML = writevirtuel.value
        window.setInterval(avoirheure(), 1000)
    }



    if(writevirtuel.value.includes("agenda") || writevirtuel.value.includes("journal") || writevirtuel.value.includes("mon planning") || writevirtuel.value.includes("mon programme")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de l'agenda electronique"
        window.setTimeout(function(){
            agendavirtuel.style.display = "block"
        }, 6000)
    }



    if(writevirtuel.value.includes("hbd marcelle") || writevirtuel.value.includes("MARCELLE") || writevirtuel.value.includes("anniversaire marcelle") || writevirtuel.value.includes("birthday marcelle")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "joyeux anniversaire marcelle, c'est vrai je ne t'aime pas, mais aujourd'hui specialement je fais une exception. piqueuse de mec!!"
       
    }


    if(writevirtuel.value.includes("meteo") || writevirtuel.value.includes("météo") || writevirtuel.value.includes("temps") || writevirtuel.value.includes("parapluie")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = `ouverture de l'espace météo!!!<br><br>PS:si vous souhaitez avoir la météo d'une autre ville vous pouvez saisir la ville en recherche`
        window.setTimeout(function(){
            espacemeteo.style.display = "block"
        }, 6000)
    }


    if(writevirtuel.value.includes("youtube") || writevirtuel.value.includes("video") || writevirtuel.value.includes("videos") || writevirtuel.value.includes("vidéos")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture du youtube intégré"
        window.setTimeout(function(){
            espaceyoutube.style.display = "block"
        }, 6000)
    }


    if(writevirtuel.value.includes("sms") || writevirtuel.value.includes("a ton createur") || writevirtuel.value.includes("message") || writevirtuel.value.includes("ecrit a ton createur")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "quel message souhaitez vous envoyer a mon dilanchou"
        window.setTimeout(function(){
            espacesms.style.display = "block"
        }, 6000)
    }


    if(writevirtuel.value.includes("quiz") || writevirtuel.value.includes("enigme") || writevirtuel.value.includes("enigmes") || writevirtuel.value.includes("devinette") || writevirtuel.value.includes("devinettes")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "lancement du Quiz!!!"
        window.setTimeout(function(){
            container.style.display = "block"
        }, 6000)
    }










    





    window.setTimeout(function(){
        reponsebabydoll.style.display = "block"
    }, 4000)


   
    window.setTimeout(function(){
        //var iconchargementmsg = document.querySelector('.fa-spinner.fa-pulse')
        //iconchargementmsg.style.display = "none"
        chargementmsg.removeChild(chargmsg)
    }, 4000)


    writevirtuel.addEventListener('change', function(){
        reponsebabydoll.style.display = "none"
        
    })



//FONCTION POUR LA SYNTHESE VOCALE
    window.setTimeout(function(){
        let texte = reponsebabydoll.innerHTML

        let parole = new SpeechSynthesisUtterance()

        parole.text = texte

        speechSynthesis.speak(parole)
    }, 5000)
//FIN DU PROGRAMME POUR LA SYNTHESE VOCALE
    




    writevirtuel.value = ""



})







   





//FONCTION POUR AVOIR L'HEURE
var avoirheure = function(){
    const now = new Date().getTime()

const days = Math.floor(now / (1000 * 60 * 60 * 24))
const hour = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
const min = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60))
const seconde = Math.floor((now % (1000 * 60)) / 1000)
const heure = hour + 1
reponsebabydoll.innerHTML = `il est ${heure}h ${min}min ${seconde}s`

}
//FIN DU PROGRAME POUR AVOIR L'HEURE









//FONCTION POUR AVOIR LA DATE DU JOUR
var avoirdatedujour = function(){
    const now = new Date()

const jouractuel = now.getDate()
const moisactuel = now.getMonth() + 1
const anneeactuel = now.getFullYear()

reponsebabydoll.innerHTML = `aujourd'hui est le ${jouractuel}/0${moisactuel}/${anneeactuel}`
}
//FIN DU PROGRAME POUR AVOIR LA DATE DU JOUR










//FONCTION POUR GERER L'AGENDA
var validerevent = document.querySelector('.validerevent')
const agendacontaint = function(){

    var agendavirtuel = document.querySelector('.agendavirtuel')
    //let datestocker = localStorage.getItem('date')
    let eventstocker = localStorage.getItem('events')
    

    //var newdate = document.createElement('p')
    var newevent = document.createElement('div')
    newevent.className = "divagenda"
    //newdate.innerHTML = `${datestocker}`
    newevent.innerHTML = `${eventstocker}`
    //agendavirtuel.appendChild(newdate)
    agendavirtuel.appendChild(newevent)


}


validerevent.addEventListener('click', function(){

    //var dateevent = document.querySelector('.dateevent')
    var event = document.querySelector('.event')

    //let dateeventvalue = document.querySelector('.dateevent').value
    let eventvalue = document.querySelector('.event').value

    //localStorage.setItem('date', dateeventvalue)
    localStorage.setItem('events', eventvalue)

    //dateevent.value = ""
   event.value = ""



})
agendacontaint()

// FIN DU PROGRAMME DE GESTION D'AGENDA


 






// PROGRAMME POUR L'ENVOI DES MESSAGES WHATSAPP
var sendmsgwha = document.querySelector('.sendmsgwha')

sendmsgwha.addEventListener('click', function(){
    var numero = document.querySelector('.numero').value
    var messagewha = document.querySelector('.messagewha').value

    location.href = "https://wa.me/"+ 237 + numero +"?text="+ messagewha
})
//FIN DU PROGRAMME POUR MESSAGE WHATSAPP










//FONCTION POUR PASSER DES APPELS
var lancerappel = document.querySelector('.lancerappel')
lancerappel.addEventListener('click', function(){
    var numeroappel = document.querySelector('.numeroappel').value

    location.href ="tel:+237656316569"+numeroappel
})









//FONCTION POUR LA RECONNAISSANCE VOCALE
/*let btnvocalsave = document.querySelector('.btnvocalsave')
let btnvocalstop = document.querySelector('.btnvocalstop')

let textvocal = document.querySelector('.textvocal')

var reconnaissance = new (window.webkitSpeechRecognition)()
reconnaissance.lang = 'fr-FR'
reconnaissance.continue = false
reconnaissance.interimResults = true

reconnaissance.onresult = function(event){
    btnvocalsave.className = "btnvocalsave"
    console.log(event)
    
    for(i = event.resultIndex; i < event.results.length; i++){
        writevirtuel.value = event.results[i][0].transcript
    }

   
    //zonechat.innerHTML = writevirtuel.value
    //writevirtuel.value = event.results[0][0].transcript

    let chargmsg = document.createElement('div')
    chargmsg.className = "fas fa-spinner fa-pulse"
    //chargmsg.innerHTML = "chargement..."
    chargementmsg.appendChild(chargmsg)
   
     
    

    zonechat.innerHTML = writevirtuel.value




    window.setTimeout(function(){
        reponsebabydoll.style.display = "block"
    }, 4000)




    window.setTimeout(function(){
        let texte = reponsebabydoll.innerHTML

        let parole = new SpeechSynthesisUtterance()

        parole.text = texte

        speechSynthesis.speak(parole)
    }, 5000)


    

    window.setTimeout(function(){
        //var iconchargementmsg = document.querySelector('.fa-spinner.fa-pulse')
        //iconchargementmsg.style.display = "none"
        chargementmsg.removeChild(chargmsg)
    }, 4000)



    //writevirtuel.value = ""
    


}





btnvocalsave.addEventListener('click', function(){
    reconnaissance.start()
    btnvocalsave.className = "voiceactif"

})




btnvocalstop.addEventListener('click', function(){
    reconnaissance.stop()

})*/
//FIN DU PROGRAMME DE RECONNAISSANEC VOCALE





//FONCTION POUR LA METEO

const APIKEY = 'aa24509925db57b2836be1788835588d'

let apimeteo = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`

fetch(url).then((response) => response.json()
.then((data) => {
    console.log(data)
    document.getElementById('city').innerHTML = " dans la ville de " + data.name
    document.getElementById('temp').innerHTML = "il fait " + data.main.temp + '°'
    document.getElementById('humidity').innerHTML = "l'humidité est de " + data.main.humidity + '%'
    document.getElementById('wind').innerHTML = "avec un vent a " + data.wind.speed + 'km/h'
    
})
)
}

document.querySelector('.submitmeteo').addEventListener('click', function(e){
    //e.preventDefault()
    let ville = document.getElementById('inputcity').value
    apimeteo(ville)
})

apimeteo('douala')
//FIN DE LA FONCTION POUR LA METEO









//FONCTION POUR YOUTUBE

$(document).ready(function(){


    const APIKEY2 = 'AIzaSyA7IXUUk5wDrOhQqCIjT1o7DPu_krVFvKM'

    let video = ''

    $("#youtubeform").submit(function(event){
        event.preventDefault()

        var searchyoutube = $("#searchyoutube").val()

        videosearch(APIKEY2, searchyoutube, 10)


    })

    function videosearch(key, search, maxResults){
        $("#youtuberesult").empty()
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
           
        console.log(data)

            data.items.forEach(item => {
                
                video = `
                
          <iframe width="500" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
          <p>${item.snippet.title}</p>
          <p>Channel : ${item.snippet.channelTitle}</p>
          <p>date de publication [${item.snippet.publishedAt}]</p>
                
                `

                $("#youtuberesult").append(video)
            });

    
        })

    }


})

    





//FONCTION POUR GOOGLE
$("#submitgoogle").click(function(event){
    event.preventDefault()

    var query = $("#searchgoogle").val()

    let result = ''
    

    var APIKEY3 = '2a4770e19abe2629fa9d5c6964651e92'

    let url = 'http://api.serpstack.com/search?access_key=' + APIKEY3 + '&type=web&query=' + query
    //console.log(url)


    $.get(url, function(data){
        $("#googleresult").empty()
      console.log(data)

      data.organic_results.forEach(res => {
          
        result = `

        <h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a>
        <p>${res.snippet}</p>
        <hr>
        
  
        `

        $("#googleresult").append(result)

      });  

    })

})
//FIN DE LA FONCTION POUR GOOGLE







//FONCTION POUR LES MESSAGES
function envoyersmstwilio(){

    const  url = 'https://api.twilio.com/2010-04-01/Accounts/AC408a5d818239bd54b3cc68363dabdd17/Messages.json'

    const auth = 'AC408a5d818239bd54b3cc68363dabdd17:77e08abcdab3b464f3143d7742770cb5'

    const messageAenvoyer = document.getElementById('messageAenvoyer').value

    const myheader = new Headers({
        'content-Type': 'application/x-www-form-urlencoded',
        'Authorization' : 'basic ' + btoa(auth)
    })

    const init = {
        method : 'POST',
        headers : myheader,
        mode : 'cors',
        body : "To=+237656316569&From=+17692008501&Body=" + "salut darenichou c'est ta babydoll❤️ tu viens de revoir un message: " + messageAenvoyer
    }

    fetch(url, init).then(response => console.log(response))

}



//FONCTION POUR LE QUIZ
class Question {
    constructor(text, choices, answer){
        this.text = text
        this.choices = choices
        this.answer = answer
    }
    iscorrectanswer(choice){
        return this.answer === choice
    }
}

let questions = [
    new Question(
        "qui a decouvert l'amerique",
         ["columb", "jack", "etoo", "jacque"],
          "columb"),

    new Question("que joue curry",
    ["football", "tennis", "basket", "cross"],
     "basket"),

    new Question("première lettre de l'aphabet",
     ["a", "c", "f", "j"],
      "a"),

    new Question("qui est le fils de DIEU",
     ["pierre", "simmon", "jesus", "juda"],
      "jesus")
]



class QUIZ {
    constructor(questions){
        this.score = 0
        this.questions = questions
        this.currentQuestionIndex = 0
    }
    getCurrentQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    guess(answer){
        if(this.getCurrentQuestion().iscorrectanswer(answer)){
            this.score++
        }
        this.currentQuestionIndex++
    }
    
    hasEnded(){
        return this.currentQuestionIndex >= this.questions.length
    }
}

 

 
  const display = {
      elementShown: function(id, text){
       let element = document.getElementById(id)
       element.innerHTML = text
      },

      endQuiz: function(){
          let endQuizHTML = `
          <h1>quiz terminé</h1>
          <h3> votre score est: ${quiz.score} / ${quiz.questions.length}</h3>`
          this.elementShown("question", endQuizHTML)
          this.elementShown("progress", "")
      },

      question: function(){
          this.elementShown("question", quiz.getCurrentQuestion().text)
      },

      choices: function(){
          let choices = quiz.getCurrentQuestion().choices
         //console.log(choices)
         

          guessHandler = function(id, guess) {
            document.getElementById(id).onclick = function() {
                quiz.guess(guess)
                quizApp()
            }
          }

          for(let i = 0; i < choices.length; i++){
            this.elementShown("choice" + i, choices[i])
            guessHandler("guess" + i, choices[i])
        }

      },
      
      progress: function(){
          let currentQuestionNumber = quiz.currentQuestionIndex + 1
          let Number = `question ${currentQuestionNumber} sur ${questions.length}`
          this.elementShown("progress", Number)
      }

  }


 quizApp = () => {
     if(quiz.hasEnded()){
        display.endQuiz()
     }else{
         display.question()
         display.choices()
         display.progress()
     }
 }


 let quiz = new QUIZ(questions)
 quizApp()



































 zonechat.innerHTML = writevirtuel.value
    if(writevirtuel.value.includes("rechercher")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "initialisation de la recherche"
        var search = writevirtuel.value.replace("rechercher", "")
        window.setTimeout(function(){
            window.open("https://www.google.fr/search?q="+search)
        }, 7000)
    }

    if(writevirtuel.value.includes("chercher")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "initialisation de la recherche"
        var search = writevirtuel.value.replace("rechercher", "")
        window.setTimeout(function(){
            window.open("https://www.google.fr/search?q="+search)
        }, 7000)
    }








    if(writevirtuel.value.includes("météo")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de la météo"
        window.setTimeout(function(){
            window.open("https://weather.com/fr-CM/temps/aujour/l/4.05,9.77?par=google")
        }, 7000)
    }


    if(writevirtuel.value.includes("agenda") || writevirtuel.value.includes("journal") || writevirtuel.value.includes("mon planning") || writevirtuel.value.includes("mon programme")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de l'agenda electronique"
        window.setTimeout(function(){
            agendavirtuel.style.display = "block"
        }, 7000)
    }


 

    if(writevirtuel.value.includes("youtube")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de youtube"
        window.setTimeout(function(){
            // window.open("https://www.google.com")
             window.open("https://www.youtube.com") 
         }, 7000)
    }


    if(writevirtuel.value.includes("itinéraire")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de la carte"
        window.setTimeout(function(){
            window.open("https://www.google.com/maps/dir/4.0617868,9.7081199/H%C3%B4tel+Lewat,+3P45%2BXJM,+Douala/@4.0599902,9.707245,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x1061126463acb831:0xae9f6bd035772ea4!2m2!1d9.7090441!2d4.0574746!3e0")
        }, 7000)
    }
   


    if(writevirtuel.value.includes("whatsapp")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "a qui souhaitez vous ecrire"
        window.setTimeout(function(){
            whatsapp.style.display = "block"
        }, 7000)
    }


    if(writevirtuel.value.includes("google")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "ouverture de google"
        window.setTimeout(function(){
            window.open("https://www.google.com") 
         }, 7000)
    }


    if(writevirtuel.value.includes("un appel")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "qui souhaitez vous appeler"
        window.setTimeout(function(){
            appeltelephonique.style.display = "block"
        }, 7000)
    }



    if(writevirtuel.value.includes("recherche")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "initialisation de la recherche"
        var search = writevirtuel.value.replace("recherche", "")
        window.setTimeout(function(){
            window.open("https://www.google.fr/search?q="+search)
        }, 7000)
    }



    if(writevirtuel.value.includes("ton nom")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "je m'appelle babydoll"
        
    }


    if(writevirtuel.value.includes("ok baby") || writevirtuel.value.includes("okay baby") || writevirtuel.value.includes("Okay baby") || writevirtuel.value.includes("OK baby") || writevirtuel.value.includes("Ok baby")){
        zonechat.innerHTML = writevirtuel.value
        reponsebabydoll.innerHTML = "salut, comment puis-je vous aidez?"
        
    }