import { reactive } from 'vue';

export const state = reactive({
  showComponent: true,
});

export function toggleComponent() {
  state.showComponent = !state.showComponent;
}
