# frozen_string_literal: true

# Makes it easier to make forms in the [Blueprint](http://blueprintjs.com/)
# style
class BlueprintFormBuilder < ActionView::Helpers::FormBuilder
  FIELD_ERROR_PROC = proc do |html_tag, _instance_tag|
    html_tag
  end

  # Creates a label, input, and helper text that are colored red together when
  # there is an error in the field.
  def form_group(method, label: nil, in_parens: nil, placeholder: nil,
                 helper_text: nil, &block)
    without_field_error_wrapper do
      classes = ['pt-form-group'] + error_classes(method)
      @template.content_tag :div, class: classes do
        contents = ''.html_safe
        contents << label_with_text_in_parens(method, label, in_parens)
        contents << form_content(method, placeholder, helper_text, &block)
      end
    end
  end

  # Creates a callout listing the form’s errors if there are any
  def errors
    return if @object.errors.empty?
    classes = %w[pt-callout pt-intent-danger pt-icon-error form__callout]
    @template.content_tag :div, class: classes do
      contents = ''.html_safe
      contents << error_header
      contents << error_list
    end
  end

  # Creates a blueprint style file input
  def file_field(method, **kwargs)
    without_field_error_wrapper do
      with_blueprint_file_input method, kwargs do |options|
        super(method, options)
      end
    end
  end

  def submit(*args, **kwargs)
    super(*args, kwargs.merge(class: %i[pt-button pt-intent-success]))
  end

  private

  def error_classes(method)
    if @object.errors[method].any?
      ['pt-intent-danger']
    else
      []
    end
  end

  def label_with_text_in_parens(method, label, in_parens)
    contents = ''.html_safe

    contents << (label || default_label_text(method))

    unless in_parens.nil?
      contents << ' '
      contents << @template.content_tag(:span, "(#{in_parens})".html_safe,
                                        class: 'pt-text-muted')
    end

    label method, contents, class: 'pt-label'
  end

  def default_label_text(method)
    @template.translate(
      "activerecord.attributes.#{normalized_object_name}.#{method}"
    )
  end

  def normalized_object_name
    @object_name.tr('[', '.').delete(']')
  end

  def form_content(method, placeholder, helper_text)
    @template.content_tag :div, class: 'pt-form-content' do
      contents = ''.html_safe

      error_classes = error_classes(method)
      contents << if block_given?
                    @template.capture_haml do
                      yield self, error_classes
                    end
                  else
                    classes = %w[pt-input pt-fill] + error_classes
                    text_field(method, class: classes, placeholder: placeholder)
                  end

      unless helper_text.nil?
        contents << @template.content_tag(:div, helper_text,
                                          class: 'pt-form-helper-text')
      end

      contents
    end
  end

  def without_field_error_wrapper
    default_field_error_proc = ::ActionView::Base.field_error_proc
    begin
      ::ActionView::Base.field_error_proc = FIELD_ERROR_PROC
      yield
    ensure
      ::ActionView::Base.field_error_proc = default_field_error_proc
    end
  end

  def error_header
    @template.content_tag :h5 do
      I18n.translate 'errors.template.header',
                     model: @object.model_name.human.downcase,
                     count: @object.errors.count
    end
  end

  def error_list
    @object.errors.full_messages
           .map { |error| @template.content_tag :div, error }
           .join
           .html_safe
  end

  def with_blueprint_file_input(method, instructions: nil, **options)
    label method, class: 'pt-label' do
      contents = ''.html_safe
      contents << default_label_text(method)
      classes = %w[pt-file-input].concat Array(options.delete(:class))
      contents << @template.content_tag(:div, class: classes) do
        div_contents = ''.html_safe
        div_contents << yield(options)
        div_contents << file_input_span(instructions)
      end
    end
  end

  def file_input_span(instructions)
    @template.content_tag :span, class: %i[pt-file-upload-input] do
      instructions || I18n.t('helpers.choose_an_image')
    end
  end
end
