<template lang="pug">

  v-flex(xs12, sm12)
    v-card.ma-4.elevation-8(color="cyan darken-2", dark)
      v-card-title(primary-title)
        div
          .headline
            div Be Prepared!
      v-card-text
         p A flood is a overflow of water on land which is usually dry.            
          v-expansion-panel
            v-expansion-panel-content.cyan.darken-3.elevation-8.mt-2
              div(slot="header") Main causes 
              v-card(color="cyan darken-3", dark)
                v-card-text
                  ul
                    li overflow of rivers, lakes or ponds
                    li heavy rains
                    li ice melting
                    li tides rise over normal level
                    li tsunami
                    li hurricanes,...
    v-card.ma-4.elevation-8(color="purple", dark)
      v-card-title(primary-title)
        div
          .headline Flood Safety Tips
      v-card-text
        v-expansion-panel
            v-expansion-panel-content.purple.darken-3.elevation-8.mt-2
              div(slot="header") Before a Flood 
              v-card(color="purple darken-3", dark)
                v-card-text
                  ul
                    li Construct barriers to stop floodwater from entering your home
                    li Listen to the radio or television for information
        v-expansion-panel
            v-expansion-panel-content.purple.darken-3.elevation-8.mt-2
              div(slot="header") When a Flood is Imminent
              v-card(color="purple darken-3", dark)            
                ul
                  li Pack a bag with important items in case you need to evacuate, this should include:
                    ul
                      li water
                      li food that won't spoil
                      li manual can opener
                      li crank or battery-powered flashlight (and extra batteries)
                      li crank or battery-powered radio (and extra batteries)
                      li first aid kit
                      li special items such as prescriptions medications, infant formula, etc
                      li cash in coins and smaller bills
                  li Disconnect electrical appliances
                  li If possible, bring in outdoor furniture and move essential items to an upper floor
                  li If there is any possibility of flash flood, move to higher ground
                  li If advised to evacuate, do so immediatly
        v-expansion-panel
            v-expansion-panel-content.purple.darken-3.elevation-8.mt-2
              div(slot="header") During a Flood
              v-card(color="purple darken-3", dark)        
                ul
                  li Do not walk through moving water
                  li If you have to walk in water, walk where the water is not moving. Use a stick to check the firmness of the ground
                  li Do not drive into flooded areas. If floodwaters rise around rise around your car, abandon the card and move to higher ground
                  li Do not touch electrical equipment if you are wet or standing in water
        v-expansion-panel
            v-expansion-panel-content.purple.darken-3.elevation-8.mt-2
              div(slot="header") After a Flood
              v-card(color="purple darken-3", dark)      
                ul
                  li Listen for news reports to be aware whether the water supply is safe
                  li Avoid floodwaters because they may be contaminated and/or electrically charged
                  li Return home only when authorities indicate it is safe
                  li Clean and disinfect everything that got wet. Mud left from floodwater can contain sewage and chemicals
</template>
