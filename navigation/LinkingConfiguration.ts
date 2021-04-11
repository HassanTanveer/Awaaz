import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          SOS: {
            screens: {
              TabOneScreen: 'SOS',
            },
          },
          Help: {
            screens: {
              TabTwoScreen: 'Help',
              Lawyers: 'lawyers'
            },
          },
          Learn: {
            screens: {
              TabThreeScreen: 'Learn',
            },
          },
          Profile: {
            screens: {
              Login: 'Login',
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
