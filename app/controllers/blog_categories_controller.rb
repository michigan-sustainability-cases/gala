class BlogCategoriesController < ApplicationController
  before_action :set_blog_category, only: [:show, :edit, :update, :destroy]

  # GET /blog_categories
  # GET /blog_categories.json
  def index
    @blog_categories = BlogCategory.all
  end

  # GET /blog_categories/1
  # GET /blog_categories/1.json
  def show
  end

  # GET /blog_categories/new
  def new
    @blog_category = BlogCategory.new
  end

  # GET /blog_categories/1/edit
  def edit
  end

  # POST /blog_categories
  # POST /blog_categories.json
  def create
    @blog_category = BlogCategory.new(blog_category_params)

    respond_to do |format|
      if @blog_category.save
        format.html { redirect_to @blog_category, notice: 'Blog category was successfully created.' }
        format.json { render :show, status: :created, location: @blog_category }
      else
        format.html { render :new }
        format.json { render json: @blog_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blog_categories/1
  # PATCH/PUT /blog_categories/1.json
  def update
    respond_to do |format|
      if @blog_category.update(blog_category_params)
        format.html { redirect_to @blog_category, notice: 'Blog category was successfully updated.' }
        format.json { render :show, status: :ok, location: @blog_category }
      else
        format.html { render :edit }
        format.json { render json: @blog_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blog_categories/1
  # DELETE /blog_categories/1.json
  def destroy
    @blog_category.destroy
    respond_to do |format|
      format.html { redirect_to blog_categories_url, notice: 'Blog category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_category
      @blog_category = BlogCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_category_params
      params.fetch(:blog_category, {})
    end
end
