import React from 'react';
import { useStyles } from './styled'

export default function Description() {
	const classes = useStyles();
	return (
		<div style={{margin: '0 auto 0 0'}}>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Nome
				</p>
				<p className={classes.textDescription}>
					Nome do Solicitante
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					E-mail
				</p>
				<p className={classes.textDescription}>
					Email do Solicitante
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Justificativa
				</p>
				<p className={classes.textDescription}>
					Justificativa
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Finalidade
				</p>
				<p className={classes.textDescription}>
					Finalidade
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Projeto
				</p>
				<p className={classes.textDescription}>
					Projeto
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Data
				</p>
				<p className={classes.textDescription}>
					Data
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Quantidade
				</p>
				<p className={classes.textDescription}>
					Quantidade de pessoas
				</p>
			</div>
			<div className={classes.lineBlock}>
				<p className={classes.textLabel}>
					Inclui café da manhã
				</p>
				<p className={classes.textDescription}>
					Inclui café da manhã
				</p>
			</div>
		</div>
	)
}
