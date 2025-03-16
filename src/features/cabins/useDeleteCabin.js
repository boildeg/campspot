import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { deleteCabin } from "../../services/apiCabins";

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteMutate } = useMutation({
    mutationFn: async (id) => {
      // Add artificial delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return deleteCabin(id);
    },
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => toast.error(error.message),
  });

  // Create a wrapper function that accepts both the id and an optional callback
  const deleteCabinWithCallback = (id, onSuccessCallback) => {
    deleteMutate(id, {
      onSuccess: () => {
        // Call the callback if provided
        if (onSuccessCallback) onSuccessCallback();
      },
    });
  };

  return { isDeleting, deleteMutate: deleteCabinWithCallback };
};
