import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatFormFieldModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent {

  imageSrc: string = '';

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  get f(){
    return this.myForm.controls;
  }

  onFileChange(event:any) {
    const reader = new FileReader();
      
    if(event.target.files & event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      
      reader.onload = () => {
     
        this.imageSrc = reader.result as string;
       
        this.myForm.patchValue({
          fileSource: reader.result as string
        });
     
      };
    }
  } 

  submit(){
    const formData = new FormData();
  
    const fileSourceValue = this.myForm.get('fileSource')?.value;
  
    if (fileSourceValue !== null && fileSourceValue !== undefined) {
        formData.append('file', fileSourceValue);
    }
       
    /*this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })*/
  }
}
