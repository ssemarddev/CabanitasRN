import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Index = () =>  {
  return (
    <LinearGradient
      colors={["#FED78A", "#FFBF37"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 justify-center p-6"
    >
      <Text className="text-black text-4xl font-Poppins-ExtraBold text-center">
        Terminos y condiciones
      </Text>
      <Text className="text-black text-xs font-Poppins-Bold mt-5">
        En este apartado se explicara los terminos y condiciones del CUPON.
      </Text>
      <Text className="text-black text-sm font-Poppins-Regular mt-5">
        El pasaje estándar Lorem Ipsum, usado desde el año 1500. "Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum." Sección 1.10.32 de "de Finibus Bonorum et Malorum",
        escrito por Cicero en el 45 antes de Cristo
      </Text>

      <Text className="text-black text-sm font-Poppins-Regular mt-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?" pains."
      </Text>
    </LinearGradient>
  );
}
export default Index;