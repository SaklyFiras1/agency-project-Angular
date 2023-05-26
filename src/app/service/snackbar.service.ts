import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }
  opensbnackbar(message:string,action : string){
    if(action==='error'){
    this.snackbar.open(message,'',{
      horizontalPosition:'center',
      verticalPosition:'top',
      duration:2000,
      panelClass:['red-snackbar']
    
    })
  }
  else{
    this.snackbar.open(message,'',{
      horizontalPosition:'center',
      verticalPosition:'top',
      duration:2000,
      panelClass:['blue-snackbar']
  }
  )}
}
}
