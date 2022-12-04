interface RecipeInputCardProps {
  prefix: string | number;
  body: string;
  index: number;
  editData: (index: number) => void;
  deleteData: (index: number) => void;
}

export default RecipeInputCardProps;
