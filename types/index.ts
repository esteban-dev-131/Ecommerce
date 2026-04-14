export interface Producto {
  id: number;
  nombre: string;
  area: string;
  valor: string;
  image: string | null;
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
