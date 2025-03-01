import { updateSetting } from "../../services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useUpdateSetting = ({ setting, setIsUpdating }) => {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateMutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Setting successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });

      setIsUpdating(false);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateMutate };
};
