import { editCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useEditCabin = ({ cabin, setIsEditing }) => {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editMutate } = useMutation({
    mutationFn: editCabin,
    onSuccess: () => {
      toast.success("Cabin successfully updated");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });

      setIsEditing(false);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editMutate };
};
