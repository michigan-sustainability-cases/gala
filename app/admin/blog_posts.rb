ActiveAdmin.register BlogPost do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :title, :blog_category_id, :author_id, :body, :featured, :cover_photo,
                :crop_x, :crop_y, :crop_w, :crop_h

  #
  # or
  #
  # permit_params do
  #   permitted = [:question_id, :quiz_id, :reader_id, :content, :correct, :case_completion, :submission_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  menu parent: "Blog", priority: 1

  form partial: 'form'


  controller do
    def update
      @blog_post = BlogPost.find(params[:id])
      if @blog_post.update(blog_post_params)
        if params[:blog_post][:cover_photo].present?
          render :crop, :layout => 'application'
        else
          render :show, notice: 'Blog Post was successfully updated.'
        end
      else
        render :edit
      end
    end

    private
    def blog_post_params
      params.require(:blog_post).permit(:title, :blog_category_id, :author_id, :body,
                                        :featured, :cover_photo, :crop_x, :crop_y, :crop_w, :crop_h)
    end
  end


  index do
    selectable_column
    id_column

    column "Photo" do |post|
      if post.thumbnail
        image_tag post.thumbnail('50x50')
      else
        ''
      end
    end

    column :title
    column :blog_category
    column :featured
    column :author
    column :created_at
    actions
  end

end
