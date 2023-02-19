var footer = document.createElement("footer");
footer.className = "footer-general";
footer.innerHTML = 
    '<div class="footer-izq">' +
        '<h3>Institución<span> Jose Fernando Causado</span></h3>' +
        '<p class="footer-links">' +
            '<a href="#" class="link-1">Home</a>' +
            '<a href="#">Acerca de nosotros</a>' +
            '<a href="#">Preguntas </a>' +
            '<a href="#">Contacto</a>' +
        '</p>' +
        '<p class="footer-nombre-inst">Institucion educativa Jose Fernando Causado © 2023</p>' +
    '</div>' +
    '<div class="footer-med">' +
        '<div>' +
            '<i class="fa fa-map-marker"><img src="/sources/img/map.png" width="35"></i>' +
            '<p><span>Calle 50. Parque Berrio </span> Medellin, Colombia</p>' +
        '</div>' +
        '<div>' +
            '<i class="fa fa-phone"><img src="/sources/img/phone.png" width="35"></i>' +
            '<p>+57 319-333-33-33</p>' +
        '</div>' +
        '<div>' +
            '<i class="fa fa-envelope"><img src="/sources/img/mail.png" width="35"></i>' +
            '<p><a href="mailto:correo@company.com">josefernandocausado@medellin.edu.co</a></p>' +
        '</div>' +
    '</div>' +
    '<div class="footer-der">' +
        '<p class="footer-lema-inst">' +
            '<span>Lema institucional</span><br>' +
            '"Donde la educación se encuentra con la innovación: preparando a los estudiantes para un futuro brillante"' +
        '</p>' +
        '<div class="footer-icons">' +
            '<a href="#"><i id="logo-facebook"></i><img src="/sources/img/facebook.png" width="35"></a>' +
            '<a href="#"><i class="fa fa-twitter"></i><img src="/sources/img/twitter.png" width="35"></a>' +
            '<a href="#"><i class="fa fa-linkedin"></i><img src="/sources/img/linkedin.png" width="35"></a>' +
            '<a href="#"><i id="logo-github"></i><img src="/sources/img/github.png" width="35"></a>' +
        '</div>' +
    '</div>';
document.body.appendChild(footer);