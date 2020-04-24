ActiveAdmin.register_page "Dashboard" do
  menu priority: 0, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do

    # Here is an example of a simple dashboard with columns and panels.
    #
    columns do
      column do
        panel "Recent Courses" do
          ul do
            Course.last(5).map do |course|
              li link_to(course.name, admin_course_path(course))
            end
          end
        end
      end

      column do
        panel "Info" do
          para "E-Learning Management System"
        end
      end
    end
  end # content
end
