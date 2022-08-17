import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet,FlatList,Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image:'http://i.brecorder.com/wp-content/uploads/2020/02/auto-1024.jpg'
  
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image:'https://www.revieyou.com/wp-content/uploads/2020/07/Pakisani-Cars.jpg'
  
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
  
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://stimg2.cardekho.com/images/carNewsEditorImages/userimages/20210409_115333/26992/maruti0.jpg?tr=w-420'
  
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://gomechanic.in/blog/wp-content/uploads/2021/03/10-cars-sold-in-pakistan-1200x720.jpg'
  
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://www.rentcars247.com/btPublic/images/Black-Civic_02.jpg'
  
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://www.financialexpress.com/wp-content/uploads/2021/03/Suzuki-alto-Pakistan.jpg'
  },
];



const data = [
  {
    Firstname: 'Sajjad',
    Lastname: 'Ali',
    email: 'sajjad@gmail.com',
    password: 'sajjad124432',
    adddress: 'Village Noor Muhammad Laghari District Naushahro Feroze'
  },

];

const MyAds = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '45%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderItem = ({ item }) => (
       <View>
          <Image resizeMode='contain' style={{width:100,borderRadius:8,height:100,margin:10}} source={{uri:item.image}}/>
      </View>
       );

  // renders
  return (

    
    <View style={styles.container}>
       <View>
       <FlatList
       horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        handleComponent={null}
        backgroundStyle={{ backgroundColor: 'transparent' }}
        style={{ overFlow: 'hidden' }}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <View style={{ margin: 5, padding: 5,elevation:6,marginVertical:10, flex:1, width: '100%', marginTop: 15, height: '100%', backgroundColor: 'purple'}}>
            {data.map((item, index) => {
         
              return (
                
                <ScrollView>
                <View style={{ flex: 1,width:'95%'}}>
                  <Text style={{marginTop:10,marginLeft:10,color:'white',borderWidth:1,padding:10}}>{item.Firstname}</Text>
                  <Text style={{marginTop:10,marginLeft:10,color:'white',borderWidth:1,padding:10}}>{item.Lastname}</Text>
                  <Text style={{marginTop:10,marginLeft:10,color:'white',borderWidth:1,padding:10}}>{item.email}</Text>
                  <Text style={{marginTop:10,marginLeft:10,color:'white',borderWidth:1,padding:10}}>{item.password}</Text>
                </View>
                </ScrollView>
              )
            })}
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'transparent'
  },
});

export default MyAds;