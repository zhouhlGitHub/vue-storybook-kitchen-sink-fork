import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './Button.vue';

storiesOf('Custom|Method for rendering Vue', module)
  .add('template', () => ({
    template: `
      <div>
        <h1>A template</h1>
        <p>rendered in vue in storybook</p>
      </div>`,
  }))
  .add('template + component', () => ({
    components: { MyButton },
    template: '<my-button>MyButton rendered in a template</my-button>',
  }))
  .add('template + methods', () => ({
    components: { MyButton },
    template: `
      <p>
        <em>Clicking the button will log a message to the actions console!</em><br/>
        <my-button :rounded="true" :handle-click="action">MyButton rendered in a template + props & methods</my-button>
      </p>`,
    methods: {
      action: action('I clicked the button!!! - template + methods'),
    },
  }))
  .add('template data', () => ({
    components: { MyButton },
    template: `
      <p>
        <em>Name: {{name}}</em><br/>
        <p>Name was passed in through Data, which is a great way to manage props in storybook examples</p><br/>
      </p>`,
    data() {
      return {
        name: 'Peter Finn'
      }
    },
  }))
  .add('JSX', () => ({
    components: { MyButton },
    render() {
      // eslint-disable-next-line react/react-in-jsx-scope
      return <my-button>MyButton rendered with JSX</my-button>;
    },
  }))
  .add('vuex + actions', () => ({
    components: { MyButton },
    template: '<my-button :handle-click="log">with vuex: {{ $store.state.count }}</my-button>',
    store: new Vuex.Store({
      state: { count: 0 },
      mutations: {
        increment(state) {
          state.count += 1; // eslint-disable-line
          action('vuex state')(state);
        },
      },
    }),
    methods: {
      log() {
        this.$store.commit('increment');
      },
    },
  }))
  .add('whatever you want', () => ({
    components: { MyButton },
    template:
      '<my-button :handle-click="log">with awesomeness: {{ $store.state.count }}</my-button>',
    store: new Vuex.Store({
      state: { count: 0 },
      mutations: {
        increment(state) {
          state.count += 1; // eslint-disable-line
          action('vuex state')(state);
        },
      },
    }),
    methods: {
      log() {
        this.$store.commit('increment');
      },
    },
  }));
