class DbTypeChoices:
    CONTENT = "Content"
    CONTENT_BY_OUTPUT = "Content_By_Output"
    OUTPUT_DESCRIPTION = "Output_Description"

    

    db_choices = [
        (CONTENT, "Content"),
        (CONTENT_BY_OUTPUT, "Content_By_Output"),
        (OUTPUT_DESCRIPTION, "Output_Description"),
    ]



status_code = [
    ('File uploaded', 'File Uploaded'),
    ('Validating data', 'Validating Data'),
    ('In progress', 'In progress'),
    ('Completed', "Completed"),
    ('Unsuccessful', 'Unsuccessful'),
]

STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('success', 'Success'),
        ('error', 'Error'),
    ]
