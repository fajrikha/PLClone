import {
  Image,
  LogBox,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {Container, Content, Icon, NativeBaseProvider} from 'native-base';
import Slideshow from 'react-native-image-slider-show';

export class PeduliLindungiHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          url: require('./../assets/img/vaksin.png'),
          title: 'Vaksin dan Imunisasi',
        },
        {
          id: 2,
          url: require('./../assets/img/hasil-tes.png'),
          title: 'Hasil Tes COVID-19',
        },
        {
          id: 3,
          url: require('./../assets/img/vaksin.png'),
          title: 'Aturan Perjalanan',
        },
        {
          id: 4,
          url: require('./../assets/img/hasil-tes.png'),
          title: 'Teledokter',
        },
        {
          id: 5,
          url: require('./../assets/img/vaksin.png'),
          title: 'Pelayanan Kesehatan',
        },
        {
          id: 6,
          url: require('./../assets/img/hasil-tes.png'),
          title: 'Statistik COVID-19',
        },
        {
          id: 7,
          url: require('./../assets/img/vaksin.png'),
          title: 'Cari Kamar Rumah Sakit',
        },
      ],
      position: 1,
      interval: null,
      modalVisible: false,
    };
  }

  componentDidMount() {
    LogBox.ignoreAllLogs();
  }

  // componentWillMount() {
  //   this.setState({
  //     interval: setInterval(() => {
  //       this.setState({
  //         position:
  //           this.state.position === this.state.data.length
  //             ? 0
  //             : this.state.position + 1,
  //       });
  //     }, 2000),
  //   });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{padding: 10}}>
              <Icon
                type="FontAwesome5"
                name="user-circle"
                style={{fontSize: 25}}
              />
            </TouchableOpacity>
            <View style={styles.wrapperText}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Hai, </Text>
              <Text style={styles.nameText}>Fajri khairullah</Text>
            </View>
          </View>
          <TouchableOpacity style={{padding: 10}}>
            <Icon type="FontAwesome5" name="bell" style={{fontSize: 24}} />
          </TouchableOpacity>
        </View>

        <Content showsVerticalScrollIndicator={false}>
          {/* checkin */}
          <View style={styles.checkinCard}>
            <View style={styles.topCheckinCard}>
              <View
                style={{
                  flex: 2.5,
                  padding: 20,
                  paddingVertical: 20,
                  // backgroundColor: 'yellow',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  Masuk ke ruang publik?
                </Text>
                <Text style={{color: '#fff', fontWeight: '500', fontSize: 16}}>
                  Selalu terapkan protokol kesehatan
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Image
                  source={require('./../assets/img/public-space.png')}
                  style={{width: 100, height: 93}}
                  resizeMode="stretch"
                  resizeMethod="resize"
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 7, top: 10}}>
                  <Icon
                    type="FontAwesome5"
                    name="info-circle"
                    style={{
                      color: '#fff',

                      fontSize: 22,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomCheckinCard}>
              {/* MODAL */}

              <Modal
                animationType="fade"
                hardwareAccelerated={true}
                transparent={true}
                visible={this.state.modalVisible}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#00000889',
                    justifyContent: 'flex-end',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      width: '100%',
                      height: '65%',
                      alignSelf: 'center',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      justifyContent: 'space-between',
                      paddingBottom: 15,
                    }}>
                    <View
                      style={{
                        paddingVertical: 20,
                        borderBottomColor: '#bbb',
                        borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        Aktifkan Kamera
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            modalVisible: !this.state.modalVisible,
                          })
                        }
                        style={{
                          position: 'absolute',
                          right: 10,
                          top: 15,
                        }}>
                        <Icon type="FontAwesome5" name="times" />
                      </TouchableOpacity>
                    </View>
                    {/* CONTENT */}
                    <View
                      style={{
                        // backgroundColor: '#bbb',
                        flex: 1,
                        marginVertical: 10,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#eee',
                          alignContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                          padding: 30,
                          borderRadius: 60,
                        }}>
                        <Icon
                          type="FontAwesome5"
                          name="camera"
                          style={{color: '#4649FF', fontSize: 50}}
                        />
                      </View>
                      <View
                        style={{
                          // backgroundColor: 'red',
                          alignItems: 'center',
                          paddingVertical: 20,
                        }}>
                        <Text style={{fontWeight: 'bold', fontSize: 22}}>
                          Aktifkan Kamera
                        </Text>
                      </View>
                      <View
                        style={{
                          // backgroundColor: 'yellow',
                          alignItems: 'center',
                          paddingHorizontal: 20,
                          paddingBottom: 20,
                        }}>
                        <Text style={{fontSize: 14}}>
                          PeduliLindungi Membutuhkan akses kamera dan lokasi
                          pada perangkat Anda untuk melakukan Check-in.
                        </Text>
                      </View>
                      <View
                        style={{
                          // backgroundColor: 'green',
                          alignItems: 'center',
                          paddingVertical: 10,
                        }}>
                        <Text style={{fontSize: 15}}>
                          Baca{' '}
                          <Text
                            style={{
                              color: '#388EEC',
                              textDecorationLine: 'underline',
                            }}>
                            Kebijakan Privasi
                          </Text>{' '}
                          untuk info lebih lanjut
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                        backgroundColor: '#388EEC',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 15,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        Saya Setuju
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}>
                <Icon
                  type="FontAwesome5"
                  name="chevron-down"
                  style={{fontSize: 18, fontWeight: 'bold', marginRight: 15}}
                />
                <Text style={{fontWeight: 'bold', color: '#000'}}>
                  Pengaturan Check-in
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({modalVisible: !this.state.modalVisible})
                }
                style={{
                  backgroundColor: '#DDEEFB',
                  width: 140,
                  height: 50,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 25,
                  padding: 10,
                  paddingHorizontal: 10,
                }}>
                <Icon
                  type="FontAwesome5"
                  name="qrcode"
                  style={{color: '#388EEC', marginRight: 5}}
                />
                <Text
                  style={{color: '#388EEC', fontWeight: 'bold', fontSize: 16}}>
                  Check-in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* content */}
          <View
            style={{
              width: '95%',
              // backgroundColor: '#bbb',
              alignSelf: 'center',
              padding: 10,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              // justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            {this.state.data.map(x => (
              <View style={{width: '25%', height: 120, marginVertical: 10}}>
                <TouchableOpacity
                  style={{
                    // backgroundColor: 'yellow',
                    alignContent: 'center',
                    alignItems: 'center',
                    // alignSelf: 'center',

                    paddingHorizontal: 12,
                  }}
                  key={x.id}>
                  <Image
                    source={x.url}
                    resizeMode="contain"
                    style={{width: '100%', height: 80}}
                  />
                </TouchableOpacity>

                <Text style={{flexWrap: 'wrap', textAlign: 'center'}}>
                  {x.title}
                </Text>
              </View>
            ))}
          </View>
          {/* slidebar */}
          <View style={{height: 300}}>
            <View
              style={{
                // backgroundColor: 'red',
                paddingHorizontal: 30,
                paddingVertical: 5,
              }}>
              <Text style={{fontWeight: '900', fontSize: 20}}>
                Informasi Kesehatan
              </Text>
            </View>

            <Slideshow
              dataSource={this.state.data}
              position={this.state.position}
              onPositionChanged={position =>
                this.state.position === this.state.data.length
                  ? 0
                  : this.setState({position})
              }
              indicatorSelectedColor="#388EEC"
              titleStyle={{color: '#fff', fontWeight: 'bold'}}
            />

            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: 18,
                elevation: 2,
                position: 'absolute',
                borderRadius: 50,
                bottom: 130,
                right: 10,
              }}>
              <Icon
                type="FontAwesome5"
                name="question-circle"
                style={{color: '#388EEC'}}
              />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default PeduliLindungiHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  wrapperText: {
    flexDirection: 'row',
    padding: 10,
  },
  nameText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkinCard: {
    // backgroundColor: 'blue',
    width: '95%',

    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 15,
    elevation: 2,
  },
  topCheckinCard: {
    backgroundColor: '#388EEC',
    // flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
  },
  bottomCheckinCard: {
    // backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
