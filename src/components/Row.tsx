import React, { ReactNode } from "react";
import { View } from "react-native";

type RowProps = {
  children: ReactNode
}
const Row = ({
  children
}: RowProps) => {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 8 }}>
      {children}
    </View>
  )
}

export default Row;
