<template lang="pug">

  v-flex(xs12, sm12)
    v-card.ma-4.elevation-8(color="cyan darken-2", dark)
      v-card-title(primary-title)
        v-flex(xs11, sm11)
          div
            .headline
              div Protégete de las inundaciones
        v-img(:src='require(`@/assets/be_prepared.png`)', height="50px", contain)
      v-card-text
         p Una inundación es la ocupación por parte del agua de zonas que habitualmente están libres de esta.
            p Sus principales causas son:
              ul
                li desbordamiento de ríos, torrentes o ramblas
                li lluvias torrenciales
                li deshielo
                li subida de las mareas por encima del nivel habitual
                li maremotos
                li huracanes,...

    v-card.ma-4.elevation-8(color="green", dark)
      v-card-title(primary-title)
        v-flex(xs11, sm11)
          div
            .headline Consejos de Seguridad
        v-img(:src='require(`@/assets/safety.png`)', height="50px", contain)
      v-card-text
        p Antes de la inundación
          ul
            li Construir barreras para evitar que el agua entre en las casas
            li Estar atento a las noticias en los medios de comunicación
        p Cuando la inundación es inminente
          ul
            li Preparar una mochila con útiles importantes. No olvides incluir:
              ul
                li agua
                li comida no perecedera
                li abrelatas
                li linterna y pilas extra
                li radio y pilas extra
                li kit de primeros auxilios
                li medicamentos para enfermedades crónicas
                li dinero en efectivo, recomendado en monedas y billetes pequeños
            li Desconectar los aparatos electricos
            li Recoger los muebles exteriores y mover los objetos importantes a un piso superior
            li Si hay posibilidad de riada, irse a un lugar más elevado
            li Si hay aviso de evacuación, hacerlo inmediatamente
        p Durante una inundación
          ul
            li No cruzar corrientes de agua
            li Si de todas formas tienes que cruzar, cruza por donde no se mueva el agua y utiliza un palo para comprobar la firmeza del suelo
            li No utilizar el coche en las zonas inundadas. Si las aguas empiezan a inundar tu coche, abandónalo y muévete a una zona más elevada
            li No tocar aparatos eléctricos si estas mojado o en el agua
        p Después de una inundación
          ul
            li Escucha las noticias para enterarte de cuando es seguro volver a usar el suministro de agua
            li Evitar las aguas de la inundación porque pueden estar contaminadas o electrificadas
            li Volver al hogar sólo cuando las autoridades indiquen que es seguro
            li Limpiar y desinfectar todo lo que se haya mojado. El barro puedo contener aguas residudales y químicos
</template>
