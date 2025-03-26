import facilities from "../../../../assets/database/facilities.json";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Facility = ({ name, icon }: { name: string; icon: string }) => (
  <View style={styles.facilityContainer}>
    <Image source={{ uri: icon }} style={styles.icon} />
    <Text style={styles.facilityName}>{name}</Text>
  </View>
);

const FacilityList = () => {
  const firstColumn = facilities.slice(0, 4);
  const secondColumn = facilities.slice(4, 8);

  return (
    <View style={styles.container}>
      {/* First Column */}
      <View style={styles.column}>
        {firstColumn.map((facility) => (
          <Facility
            key={facility.id}
            name={facility.name}
            icon={facility.icon}
          />
        ))}
      </View>

      {/* Second Column */}
      <View style={styles.column}>
        {secondColumn.map((facility) => (
          <Facility
            key={facility.id}
            name={facility.name}
            icon={facility.icon}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  facilityContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  facilityName: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
});

export default FacilityList;
