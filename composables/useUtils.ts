
export const useUtils = () => {
  const route = useRoute();
  const page = computed(() => (route.query.page ? Number(route.query.page) : 1));

  return { page }
}
