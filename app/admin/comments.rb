ActiveAdmin.register Comment do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :reader_id, :comment_thread_id, :position, :content
  #
  # or
  #
  # permit_params do
  #   permitted = [:reader_id, :comment_thread_id, :position, :content]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  menu label: "Comments"


end
