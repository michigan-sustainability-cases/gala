ActiveAdmin.register CommentThread do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :case_id, :original_highlight_text, :locale, :card_id, :reader_id, :forum_id, :comments_count, :key
  #
  # or
  #
  # permit_params do
  #   permitted = [:case_id, :original_highlight_text, :locale, :card_id, :reader_id, :forum_id, :comments_count, :key]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    selectable_column
    id_column
    column 'Case' do |thread|
      thread.case.kicker
    end
    column 'Card' do |thread|
      "Card #{thread.card.position} on Page #{Page.where(id: thread.card.page_id).first!.position}" unless !thread.card
    end
    column :community
    column 'Collocutors' do |thread|
      "#{thread.collocutors.count} collocutors"
    end
    column 'Comments' do |thread|
      "#{thread.comments.count} comments"
    end
    actions
  end

end
