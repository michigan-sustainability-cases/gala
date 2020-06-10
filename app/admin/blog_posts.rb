ActiveAdmin.register BlogPost do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :title, :blog_category_id, :author_id, :body, :featured
  #
  # or
  #
  # permit_params do
  #   permitted = [:question_id, :quiz_id, :reader_id, :content, :correct, :case_completion, :submission_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  menu parent: "Blog", priority: 1


  index do
    selectable_column
    id_column
    column :title
    column :blog_category
    column :featured
    column :reader
    column :created_at
    actions
  end

end
