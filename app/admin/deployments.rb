ActiveAdmin.register Deployment do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :case_id, :group_id, :quiz_id, :answers_needed, :key
  #
  # or
  #
  # permit_params do
  #   permitted = [:case_id, :group_id, :quiz_id, :answers_needed, :key]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  menu label: "Deployments"

end
