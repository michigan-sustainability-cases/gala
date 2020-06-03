ActiveAdmin.register Answer do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :question_id, :quiz_id, :reader_id, :content, :correct, :case_completion, :submission_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:question_id, :quiz_id, :reader_id, :content, :correct, :case_completion, :submission_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end


  index do
    selectable_column
    id_column
    column 'Question' do |answer|
      answer.question.content
    end
    column :reader
    column :content
    column :correct
    column :case_completion
    actions
  end

end
